import { Block } from "../../components/block";
import { Chart } from "../../components/charts";

export default function B2() {
  // 定义各乡镇公示公开数量数据
  const townData = [
    { name: "华丰镇", value: 120 },
    { name: "高安镇", value: 90 },
    { name: "沙建镇", value: 80 },
    { name: "丰山镇", value: 70 },
    { name: "新圩镇", value: 50 },
    { name: "仙都镇", value: 40 },
  ];

  // 当前显示的数据
  const currentData = townData;

  // 图表配置 - 横向柱状图
  const barChartOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: { type: "shadow" },
      backgroundColor: "rgba(0,0,0,0.7)",
      borderColor: "#0073D6",
      textStyle: { color: "#fff" },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      top: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "value" as const,
      axisLabel: { color: "#fff" },
      axisLine: {
        lineStyle: { color: "#1E3A6F" },
      },
      splitLine: {
        lineStyle: { color: "rgba(30,58,111,0.3)" },
      },
    },
    yAxis: {
      type: "category" as const,
      data: currentData.map((item) => item.name),
      axisLabel: {
        color: "#fff",
        interval: 0,
        margin: 15,
      },
      axisLine: {
        lineStyle: { color: "#1E3A6F" },
      },
      axisTick: {
        show: true,
        length: 8,
      },
    },
    series: [
      {
        name: "公示数量",
        type: "bar",
        barWidth: "50%",
        barGap: "10%",
        barCategoryGap: "20%",
        data: currentData.map((item) => item.value),
        itemStyle: {
          color: "#42DEFF",
        },
        label: {
          show: true,
          position: "right",
          color: "#fff",
          fontSize: 12,
        },
        emphasis: {
          itemStyle: {
            color: "#5DEBFF",
          },
        },
      },
    ],
  };

  // 群众点击阅读TOP5公示信息数据
  const topPublicInfo = [
    { title: "2023年乡村医疗补助政策", views: 12584 },
    { title: "华安县城乡规划公示", views: 9752 },
    { title: "2023年村级基层选举公告", views: 8424 },
    { title: "农村住房改造项目公示", views: 7621 },
    { title: "脱贫攻坚项目资金使用情况", views: 6891 },
  ];

  return (
    <Block
      title={"政务信息公示公开统计"}
      className="bg-[#0F1C3F] text-white h-full w-full px-4 py-2 flex-3"
    >
      {/* 顶部统计卡片 */}
      <div className="grid grid-cols-3 gap-2 mb-3 h-[100px]">
        {/* 本月公示数 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">本月公示数</div>
          <div className="text-2xl font-bold text-[#42DEFF] mt-1">156</div>
        </div>

        {/* 同比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">同比</div>
          <div className="text-2xl font-bold text-[#36CFC9] mt-1">↑8.2%</div>
        </div>

        {/* 环比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">环比</div>
          <div className="text-2xl font-bold text-[#36CFC9] mt-1">↑3.5%</div>
        </div>
      </div>

      {/* 群众查阅TOP公示信息 */}
      <div className="bg-[#152950] rounded-lg p-3 mb-3 h-[160px]">
        <div className="text-[#86909C] text-sm mb-2">
          群众点击阅读TOP5公示信息
        </div>
        <div className="overflow-y-auto h-[calc(100%-24px)] pr-2">
          {topPublicInfo.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-b border-[#1E3A6F]"
            >
              <div className="text-white truncate max-w-[calc(100%-80px)]">
                {index + 1}. {item.title}
              </div>
              <div className="text-[#36CFC9] font-medium">
                {item.views.toLocaleString()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 各乡镇公示公开数量排行 */}
      <div className="bg-[#152950] rounded-lg p-3 h-[calc(100%-268px)]">
        <div className="mb-2">
          <div className="text-[#86909C] text-sm">各乡镇公示公开数量排行</div>
        </div>
        <div className="h-[calc(100%-24px)] w-full">
          <Chart option={barChartOption} />
        </div>
      </div>
    </Block>
  );
}
