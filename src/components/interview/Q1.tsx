import { useEffect, useRef, useState } from 'react';

export default function Q1() {
  /* 定义 ref 存储 DOM 元素 */
  const flexRef = useRef<HTMLHeadingElement | null>(null);
  const gridRef = useRef<HTMLHeadingElement | null>(null);
  const positionRef = useRef<HTMLHeadingElement | null>(null);

  /* 使用 state 定义闪烁状态 */
  const [blink, setBlink] = useState<'idle' | 'blinking'>('idle');

  useEffect(() => {
    const interval = setInterval(() => {
      setBlink('blinking');

      // 1 秒后回到 idle
      setTimeout(() => {
        setBlink('idle');
      }, 1000);
    }, 2000);

    /* 清理 interval */
    return () => clearInterval(interval);
  }, []);

  /* 事件处理器 */
  const handleFlexClick = () => {
    if (!flexRef.current) return;

    /* 使用 getBoundingClientRect 获取元素在当前视口中的位置信息 */
    const { top, left } = flexRef.current.getBoundingClientRect();
    alert(`String is at X:${left}, Y:${top}`);
  };

  const handleGridClick = () => {
    if (!gridRef.current) return;

    const { top, left } = gridRef.current.getBoundingClientRect();
    alert(`String is at X:${left}, Y:${top}`);
  };

  const handlePositionClick = () => {
    if (!positionRef.current) return;

    const { top, left } = positionRef.current.getBoundingClientRect();
    alert(`String is at X:${left}, Y:${top}`);
  };

  return (
    <div className="my-8">
      {/* flex 容器 */}
      <div className="flex justify-center items-center bg-gray-400 min-h-20 text-2xl">
        {/* 添加背景色，让边框变得更明显，并添加radius保持美观 */}
        <h1
          onClick={handleFlexClick}
          ref={flexRef}
          /* 判断 blink 的状态，闪烁时让其透明，否则让其出现 */
          className={`bg-red-100 text-red-300 border-red-100 rounded-2xl p-2 transition-all duration-300 ${
            blink === 'blinking' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          Hello, HTML
        </h1>
      </div>

      {/* Css Grid */}
      <div className="grid justify-center items-center bg-gray-300 min-h-20 text-2xl">
        <h1
          onClick={handleGridClick}
          ref={gridRef}
          className="bg-blue-100 p-2 text-blue-300 border-blue-200 rounded-2xl"
        >
          Hello, HTML
        </h1>
      </div>

      {/* 绝对定位 */}
      <div className="relative min-h-20">
        <h1
          onClick={handlePositionClick}
          ref={positionRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-2 text-2xl font-semibold bg-purple-100 text-purple-300 border border-purple-200 rounded-2xl"
        >
          Hello, HTML
        </h1>
      </div>
    </div>
  );
}
