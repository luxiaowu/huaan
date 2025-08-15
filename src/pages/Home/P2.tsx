import { Block } from "../../components/block";
import { Chart, type EChartsOption } from "../../components/charts";

export function P2() {
  // 模拟通知公告数据
  const notifications = [
    { title: "华安县2025年1-3月主题经济指", time: "05-27" },
    { title: "2025年5月保障资金发放名单", time: "05-27" },
    { title: "五一放假通知", time: "05-10" },
    { title: "华安县2025年1-3月主题经济指", time: "05-27" },
    { title: "2025年3月保障资金", time: "05-27" },
    { title: "五一放假通知", time: "05-10" },
  ];

  return (
    <Block title={"通知公告"} className="h-full w-full p-2">
      <div className="w-full h-full overflow-y-auto p-2   ">
        <div className="space-y-4">
          {notifications.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center  transition-colors"
            >
              <div className="flex items-center gap-3 border-b border-[#0072D5]/30 py-3  hover:bg-[#0072D5]/10 w-4/5">
                <div className="w-1 h-5 bg-[#00E4FF]"></div>
                <div className="text-white text-[13px] truncate max-w-[280px]">
                  {item.title}
                </div>
              </div>
              <div className="text-[#8AB4D9] text-[12px]">{item.time}</div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
