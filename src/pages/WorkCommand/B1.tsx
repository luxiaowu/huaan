import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { Block } from "../../components/block";

export default function B1() {
  // 引用图表容器
  const trendChartRef = useRef<HTMLDivElement>(null);
  const pieChartRef = useRef<HTMLDivElement>(null);

  // 初始化图表
  useEffect(() => {
    // 折线图 - 近30天通知发布趋势
    if (trendChartRef.current) {
      const trendChart = echarts.init(trendChartRef.current);
      trendChart.setOption({
        tooltip: { trigger: "axis" },
        grid: { left: "3%", right: "4%", bottom: "3%", containLabel: true },
        xAxis: {
          type: "category",
          data: Array.from({ length: 30 }, (_, i) => i + 1),
        },
        yAxis: { type: "value" },
        series: [
          {
            name: "发布数量",
            type: "line",
            smooth: true,
            data: [
              12, 19, 13, 15, 12, 13, 10, 15, 12, 17, 14, 12, 10, 15, 12, 17,
              14, 12, 10, 15, 12, 17, 14, 12, 10, 15, 18, 20, 22, 25,
            ],
            lineStyle: { color: "#42DEFF" },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(66, 222, 255, 0.5)" },
                { offset: 1, color: "rgba(66, 222, 255, 0)" },
              ]),
            },
          },
        ],
      });

      // 响应窗口大小变化
      const resizeHandler = () => trendChart.resize();
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  useEffect(() => {
    // 饼图 - 通知公告级别占比
    if (pieChartRef.current) {
      const pieChart = echarts.init(pieChartRef.current);
      pieChart.setOption({
        tooltip: { trigger: "item" },
        legend: { top: "bottom", textStyle: { color: "#fff" } },
        series: [
          {
            name: "通知级别",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#0F1C3F",
              borderWidth: 2,
            },
            label: { show: false },
            emphasis: {
              label: { show: true, fontSize: "16", fontWeight: "bold" },
            },
            labelLine: { show: false },
            data: [
              { value: 342, name: "县级", itemStyle: { color: "#42DEFF" } },
              { value: 428, name: "乡镇", itemStyle: { color: "#36CFC9" } },
              { value: 516, name: "村级", itemStyle: { color: "#722ED1" } },
            ],
          },
        ],
      });

      // 响应窗口大小变化
      const resizeHandler = () => pieChart.resize();
      window.addEventListener("resize", resizeHandler);
      return () => window.removeEventListener("resize", resizeHandler);
    }
  }, []);

  return (
    <Block
      title={"通知公告管理中心"}
      className="bg-[#0F1C3F] text-white w-full p-2 flex-2"
    >
      <div className="grid grid-cols-2 gap-2 mb-2">
        {/* 累计发布信息数 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">累计发布通知数</div>
          <div className="text-2xl font-bold text-white mt-1">1,286</div>
          <div className="flex items-center text-xs mt-1 flex-wrap">
            <span className="text-[#86909C] mr-2">县级:342</span>
            <span className="text-[#86909C] mr-2">乡镇:428</span>
            <span className="text-[#86909C]">村级:516</span>
          </div>
        </div>

        {/* 本期推送数 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">本周新增通知数</div>
          <div className="text-2xl font-bold text-white mt-1">42</div>
          <div className="flex items-center text-xs text-[#36CFC9] mt-1">
            <span className="mr-1">↑</span>
            <span>12.5% 较上周</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 h-[calc(100%-40px)] overflow-hidden">
        {/* 近30天通知发布趋势 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col">
          <div className="text-[#86909C] text-sm mb-2">近30天通知发布趋势</div>
          <div ref={trendChartRef} className="flex-grow w-full"></div>
        </div>

        {/* 通知公告类别占比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col">
          <div className="text-[#86909C] text-sm mb-2">通知公告级别占比</div>
          <div ref={pieChartRef} className="flex-grow w-full"></div>
        </div>
      </div>
    </Block>
  );
}
