import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { AccordionItem, AccordionTrigger } from './AccordionFeatures';

export type FeaturesDataProps = {
  id: number;
  title: string;
  content: string;
  image?: string;
  video?: string;
  icon?: React.ReactNode;
};

export type FeaturesProps = {
  collapseDelay?: number;
  ltr?: boolean;
  linePosition?: 'left' | 'right' | 'top' | 'bottom';
  data: FeaturesDataProps[];
};

export default function FeaturesVertical({
  collapseDelay = 5000,
  ltr = false,
  linePosition = 'left',
  data = [],
}: FeaturesProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const carouselRef = useRef<HTMLUListElement>(null);
  const sectionref = useRef(null);
  /* once 表示只会判断一次，amount 表示 sectionref 进入视口的总量，这里为50%。在第一次进入视口50%时，useInView 会返回 true */
  const isInView = useInView(sectionref, {
    once: true,
    amount: 0.5,
  });

  /* 负责启动动画。在 section 进入视口 50% 时把 currentIndex 设置为 0，激活第一个 feature，所有后续的逻辑就开始运转。这里设置一个 100ms 的延迟是为了让 layout 稳定，避免动画导致的抖动。
  原因是不应该在用户还没有看见的时候就开始自动轮播 */
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isInView) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(-1);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [isInView]);

  /* 定时让 currentIndex 往前走，实现自动播放。这里其实有个隐形 bug，在并未进入视图的时候其实也会触发动画，因为这个 interval 的触发是无条件的。在进入视图后动画能从头开始只是因为第一个 useEffect 把 currentIndex 拉回了 0 而已。 */
  useEffect(() => {
    /* 每 collapseDelay 毫秒，把 currentIndex + 1，并在末尾时回到 0 重头开始 */
    const timer = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex !== undefined ? (prevIndex + 1) % data.length : 0
      );
    }, collapseDelay);

    return () => clearInterval(timer);
  }, [collapseDelay, currentIndex, data.length]);

  /* 控制移动端轮播图的函数，它会把横向的轮播图滚到第 N 个卡片并居中 */
  const scrollToIndex = (index: number) => {
    /* 只在轮播图存在时走逻辑，所以在桌面端时这个 effect 不需要考虑其作用 */
    if (carouselRef.current) {
      /* 拿到对应的那个 card */
      const card = carouselRef.current.querySelectorAll('.card')[index];
      if (card) {
        const cardRect = card.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();
        /* 计算卡片居中时，它左边缘应该在什么位置 */
        const offset =
          cardRect.left -
          carouselRect.left -
          (carouselRect.width - cardRect.width) / 2;
        /* carouselRef.current.scrollLeft 是当前滚动的位置，因为 目标位置 = 当前滚动位置 + 需要补的差值。如果使用的是 scrollBy 就可以只用 offset
         */
        carouselRef.current.scrollTo({
          left: carouselRef.current.scrollLeft + offset,
          behavior: 'smooth',
        });
      }
    }
  };

  /* 服务移动端的轮播图，在自动播放的同时保证卡片在视觉上也能跟着走。这里其实直接用 currentIndex 直接滚动也行，因为上面一个 useEffect 会让其自动更新。这里提前滚动是为了滚动发生在“下一个即将激活”的时间点，而不是 index 更新完之后。 */
  useEffect(() => {
    const handleAutoScroll = () => {
      /* 先算出下一个 currentIndex */
      const nextIndex =
        (currentIndex !== undefined ? currentIndex + 1 : 0) % data.length;
      /* 然后把值传给 scrollToIndex，把下一个卡片拉到轮播图的中间 */
      scrollToIndex(nextIndex);
    };

    /* 每 collapseDelay 毫秒，把下一个卡片拉到轮播图中心 */
    const autoScrollTimer = setInterval(handleAutoScroll, collapseDelay);

    return () => clearInterval(autoScrollTimer);
  }, [collapseDelay, currentIndex, data.length]);

  /* 在拖动轮播图时，当前卡片发生变化，此时更新 currentIndex，让轮播图上方的图片同步切换 */
  useEffect(() => {
    const carousel = carouselRef.current;
    /* 在没有轮播图的时候不走逻辑，所以只在移动端有效。 */
    if (carousel) {
      const handleScroll = () => {
        const scrollLeft = carousel.scrollLeft;
        const cardWidth = carousel.querySelector('.card')?.clientWidth || 0;
        /* 滚过 0 ~ 0.99 张 → index 0
        滚过 1.00 ~ 1.99 张 → index 1
        滚过 2.00 ~ 2.99 张 → index 2 */
        const newIndex = Math.min(
          Math.floor(scrollLeft / cardWidth),
          data.length - 1
        );
        setCurrentIndex(newIndex);
      };

      /* 在轮播图容器发生 scroll 事件时触发 */
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, [data.length]);

  return (
    <section ref={sectionref} id="features">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          {/* grid 容器，在桌面端会生成一个两列的网格，左侧是 Accordion，右侧是图片、视频资源 */}
          <div className="mx-auto my-12 h-full grid lg:grid-cols-2 gap-10 items-center">
            {/* 左侧，桌面端才会出现的 flex 容器，移动端完全不会渲染 */}
            <div
              className={`hidden lg:flex order-1 lg:order-0 ${
                ltr ? 'lg:order-2 lg:justify-end' : 'justify-start'
              }`}
            >
              <Accordion.Root
                type="single"
                value={`item-${currentIndex}`}
                onValueChange={value =>
                  setCurrentIndex(Number(value.split('-')[1]))
                }
              >
                {/* 单个 feature ，每个 AccordionItem 里都是一个 feature */}
                {data.map((item, index) => (
                  <AccordionItem
                    key={item.id}
                    className="relative mb-8 last:mb-0"
                    value={`item-${index}`}
                  >
                    {/* 这两个是进度条，可以出现在左右，或者上下 */}
                    {linePosition === 'left' || linePosition === 'right' ? (
                      /* 这个灰色的，就是那个灰色的进度条背景 */
                      <div
                        className={`absolute bottom-0 top-0 h-full w-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                          /* 如果 linePosition 是 right ，那就让进度条出现在卡片的右边，否则就是左边 */
                          linePosition === 'right'
                            ? 'left-auto right-0'
                            : 'left-0 right-auto'
                        }`}
                      >
                        {/* 这个 div 就是进度条本体，在 currentIndex === index 时，它会在5秒内，以增加其高度的方式，从元素的顶部开始填满灰色的进度条容器，就实现了一个从上往下的进度条效果 */}
                        <div
                          /* 在 currentIndex 和当前卡片的 index 相等时，就让进度条增长。在5秒后 currentIndex 自动加 1 ，下一个卡片的进度条就会开                            始增长。而在初始状态下动画不会进行的原因，就是因为 currentIndex 的初始值是 -1 ,-1 不和任何一个 index 相等 */
                          className={`absolute left-0 top-0 w-full ${
                            currentIndex === index ? 'h-full' : 'h-0'
                          } origin-top bg-primary transition-all ease-linear dark:bg-white`}
                          style={{
                            transitionDuration:
                              currentIndex === index
                                ? `${collapseDelay}ms`
                                : '0s',
                          }}
                        ></div>
                      </div>
                    ) : null}
                    {/* 也是进度条，只是方向从左右变成了上下，逻辑和上面的进度条完全一样 */}
                    {linePosition === 'top' || linePosition === 'bottom' ? (
                      <div
                        className={`absolute left-0 right-0 w-full h-0.5 overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30 ${
                          linePosition === 'bottom' ? 'bottom-0' : 'top-0'
                        }`}
                      >
                        <div
                          className={`absolute left-0 ${
                            linePosition === 'bottom' ? 'bottom-0' : 'top-0'
                          } h-full ${
                            currentIndex === index ? 'w-full' : 'w-0'
                          } origin-left bg-primary transition-all ease-linear dark:bg-white`}
                          style={{
                            transitionDuration:
                              currentIndex === index
                                ? `${collapseDelay}ms`
                                : '0s',
                          }}
                        ></div>
                      </div>
                    ) : null}

                    {/* feature 的内容本体，就是左侧的 icon 和 文本 */}
                    <div className="flex items-center relative">
                      {/* 圆形 icon */}
                      <div className="item-box w-12 h-12 bg-primary/10 rounded-full sm:mx-6 mx-2 shrink-0 flex items-center justify-center">
                        {item.icon}
                      </div>

                      {/* 文本区域 */}
                      <div>
                        {/* 标题 */}
                        <AccordionTrigger className="text-xl font-bold pl-0">
                          {item.title}
                        </AccordionTrigger>
                        {/* 描述 */}
                        <AccordionTrigger className="justify-start text-left leading-4 text-[16px] pl-0">
                          {item.content}
                        </AccordionTrigger>
                      </div>
                    </div>
                  </AccordionItem>
                ))}
              </Accordion.Root>
            </div>

            {/* 图片、视频区域，桌面和移动端共用。在桌面端时，feature 卡片会出现在它的左边；移动端时，左侧的卡片不会出现，下方会出现一个由三张卡片组成的轮播图 */}
            <div
              className={`h-[350px] min-h-[200px] w-auto  ${
                ltr && 'lg:order-1'
              }`}
            >
              {/* 如果有图片，就展示图片 */}
              {data[currentIndex]?.image ? (
                <motion.img
                  key={currentIndex}
                  src={data[currentIndex].image}
                  alt="feature"
                  className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover object-top-left p-1 shadow-lg"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, ease: 'easeOut' }}
                />
              ) : /* 如果有视频，就展示视频 */
              data[currentIndex]?.video ? (
                <video
                  preload="auto"
                  src={data[currentIndex].video}
                  className="aspect-auto h-full w-full rounded-lg object-cover shadow-lg"
                  autoPlay
                  loop
                  muted
                />
              ) : (
                /* 如果图片和视频都没有，就展示一个占位符 */
                <div className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 bg-gray-200 p-1"></div>
              )}
            </div>

            {/* 这是在移动端才会显示的轮播图，桌面端不会出现，className 里有一个 lg:hidden */}
            <ul
              ref={carouselRef}
              className="lg:hidden flex h-full snap-x flex-nowrap overflow-x-auto py-10 [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] mask-[linear-gradient(90deg,transparent,black_20%,white_80%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-mandatory"
              style={{
                padding: '50px calc(50%)',
              }}
            >
              {/* 展示的内容是三个一直轮播的 feature 卡片 */}
              {data.map((item, index) => (
                <div
                  key={item.id}
                  className="card relative mr-8 grid h-full max-w-60 shrink-0 items-start justify-center py-4 last:mr-0"
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    scrollSnapAlign: 'center',
                  }}
                >
                  {/* 同样是进度条灰色背景，出现在卡片的顶端 */}
                  <div className="absolute left-0 right-auto top-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 dark:bg-neutral-300/30">
                    {/* 进度条本身，因为是横向的，所以它会在五秒内增大自己的宽度 */}
                    <div
                      className={`absolute left-0 top-0 h-full ${
                        currentIndex === index ? 'w-full' : 'w-0'
                      } origin-top bg-primary transition-all ease-linear`}
                      style={{
                        transitionDuration:
                          currentIndex === index ? `${collapseDelay}ms` : '0s',
                      }}
                    ></div>
                  </div>
                  {/* 卡片标题 */}
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  {/* 卡片内容 */}
                  <p className="mx-0 max-w-sm text-balance text-sm">
                    {item.content}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
