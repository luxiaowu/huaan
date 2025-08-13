import { useEffect, useState } from "react";
import { Header } from "./components/header";
import Home from "./pages/Home";
import PublicOpinion from "./pages/PublicOpinion";
import WorkCommand from "./pages/WorkCommand";
import CountryIndustry from "./pages/CountryIndustry";
import PlatformDynamic from "./pages/PlatformDynamic";
import EcommerceOperation from "./pages/EcommerceOperation";

export default function App() {
  const [active, setActive] = useState("总览");

  const [scale, setScale] = useState(1);
  useEffect(() => {
    // 计算缩放比例
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    setScale(scale);
    // 监听窗口大小变化
    const handleResize = () => {
      const newScale = Math.min(
        window.innerWidth / 1920,
        window.innerHeight / 1080
      );
      setScale(newScale);
    };
    window.addEventListener("resize", handleResize);
    // 清理事件监听器
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // 计算左侧偏移量
  const leftOffset = (window.innerWidth - 1920 * scale) / 2;

  return (
    <div className={"relative w-screen h-screen overflow-hidden"}>
      <div
        className={"main-container origin-top-left mx-auto"}
        style={{ transform: `scale(${scale}) translateX(${leftOffset}px)` }}
      >
        <Header />
        <div className="flex gap-10 justify-center absolute left-0 right-0 top-[110px] text-white text-xl">
          {[
            "总览",
            "社情民意",
            "工作指挥",
            "县域产业",
            "平台动态",
            "电商运营",
          ].map((item) => (
            <div
              key={item}
              onClick={() => setActive(item)}
              className={`px-3 py-2 border border-cyan-300 rounded-md appearance-button bg-transparent bg-none transition-all duration-150 ease-in-out hover:border-white hover:shadow-[0_0_10px_rgba(66,222,255,0.5)] cursor-pointer ${
                active === item ? "bg-white text-black" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
        {active === "总览" && <Home />}
        {active === "社情民意" && <PublicOpinion />}
        {active === "工作指挥" && <WorkCommand />}
        {active === "县域产业" && <CountryIndustry />}
        {active === "平台动态" && <PlatformDynamic />}
        {active === "电商运营" && <EcommerceOperation />}
      </div>
    </div>
  );
}
