import type { ReactNode } from "react";

type BlockProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
};
/**
 * 内容容器
 */
export function Block(prop: BlockProps) {
  const { title, children } = prop;
  return (
    <div className={`block-container ${prop.className || ""}`}>
      <div
        className={"h-9 pl-3 flex items-center"}
        style={{
          background:
            "linear-gradient(90deg, #0072D5 0%, rgba(1,24,55,0.2) 100%)",
        }}
      >
        <div
          style={{
            fontFamily: "PingFang SC",
            fontWeight: "normal",
            fontSize: "20px",
            color: "#42DEFF",
          }}
        >
          {title}
        </div>
      </div>
      <div className={"h-0 grow flex flex-col"}>{children}</div>
    </div>
  );
}
