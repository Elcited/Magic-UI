import { type SVGProps } from 'react';

export interface SafariProps extends SVGProps<SVGSVGElement> {
  /** 地址栏中显示的 URL，仅用于展示 */
  url?: string;
  /** Safari 窗口中嵌入的页面截图 */
  src?: string;
  /** 整个 Safari 窗口宽度 */
  width?: number;
  /** 整个 Safari 窗口高度 */
  height?: number;
}

/**
 * Safari 浏览器外壳展示组件
 * - 使用 SVG 手工绘制 Safari UI
 * - 将传入的页面截图裁剪后嵌入窗口中
 * - 纯展示用途（官网 / Demo / Showcase）
 */
export default function Safari({
  src,
  url,
  width = 1203,
  height = 753,
  ...props
}: SafariProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* 整个 Safari 窗口的裁剪区域 */}
      <g clipPath="url(#path0)">
        {/* ================= Safari 主体背景（内容区 + 圆角底部） ================= */}
        <path
          d="M0 52H1202V741C1202 747.627 1196.63 753 1190 753H12C5.37258 753 0 747.627 0 741V52Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />

        {/* ================= Safari 顶部标题栏背景 ================= */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 12C0 5.37258 5.37258 0 12 0H1190C1196.63 0 1202 5.37258 1202 12V52H0L0 12Z"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />

        {/* ================= 顶部栏内层（制造内边框/层次感） ================= */}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.06738 12C1.06738 5.92487 5.99225 1 12.0674 1H1189.93C1196.01 1 1200.93 5.92487 1200.93 12V51H1.06738V12Z"
          className="fill-white dark:fill-[#262626]"
        />

        {/* ================= macOS 窗口左上角三个控制按钮 ================= */}
        {/* 关闭按钮 */}
        <circle
          cx="27"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        {/* 最小化按钮 */}
        <circle
          cx="47"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />
        {/* 最大化按钮 */}
        <circle
          cx="67"
          cy="25"
          r="6"
          className="fill-[#E5E5E5] dark:fill-[#404040]"
        />

        {/* ================= 地址栏背景（中间圆角矩形） ================= */}
        <path
          d="M286 17C286 13.6863 288.686 11 292 11H946C949.314 11 952 13.6863 952 17V35C952 38.3137 949.314 41 946 41H292C288.686 41 286 38.3137 286 35V17Z"
          fill="#F5F5F5"
        />

        {/* ================= 地址栏左侧：安全锁图标 ================= */}
        <g className="mix-blend-luminosity">
          <path
            d="M566.269 32.0852H572.426C573.277 32.0852 573.696 31.6663 573.696 30.7395V25.9851C573.696 25.1472 573.353 24.7219 572.642 24.6521V23.0842C572.642 20.6721 571.036 19.5105 569.348 19.5105C567.659 19.5105 566.053 20.6721 566.053 23.0842V24.6711C565.393 24.7727 565 25.1917 565 25.9851V30.7395C565 31.6663 565.418 32.0852 566.269 32.0852Z"
            fill="#A3A3A3"
          />
        </g>

        {/* ================= 地址栏 URL 文本 ================= */}
        <g className="mix-blend-luminosity">
          <text
            x="580"
            y="30"
            fill="#A3A3A3"
            fontSize="12"
            fontFamily="Arial, sans-serif"
          >
            {url}
          </text>
        </g>

        {/* ================= Safari 工具栏图标（每个 g 对应一个图标） ================= */}
        {/* 示例：刷新 / 返回 / 分享 / 标签页 / 下载等（以下均为图标路径） */}
        <g className="mix-blend-luminosity">
          {/* 工具栏图标 1 */}
          <path d="M265.5 33.8984C..." fill="#A3A3A3" />
        </g>

        <g className="mix-blend-luminosity">
          {/* 工具栏图标 2 */}
          <path d="M936.273 24.9766C..." fill="#A3A3A3" />
        </g>

        {/* ================= Safari 内容区：嵌入的页面截图 ================= */}
        <image
          href={src}
          width="1200"
          height="700"
          x="1"
          y="52"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#roundedBottom)"
        />
      </g>

      {/* ================= SVG 裁剪定义 ================= */}
      <defs>
        {/* 整体裁剪，防止溢出 SVG 边界 */}
        <clipPath id="path0">
          <rect width={width} height={height} fill="white" />
        </clipPath>

        {/* 内容区底部圆角裁剪，用于截图 */}
        <clipPath id="roundedBottom">
          <path
            d="M1 52H1201V741C1201 747.075 1196.08 752 1190 752H12C5.92486 752 1 747.075 1 741V52Z"
            fill="white"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
