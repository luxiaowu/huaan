import { Block } from "../../components/block";
import { Chart, type EChartsOption } from "../../components/charts";
import * as echarts from "echarts";
import rate from "../../assets/icon/rate.png";
import replay from "../../assets/icon/replay.png";
import message from "../../assets/icon/message.png";
import rongliang from "../../assets/icon/rongliang.png";

const iconMap = {
  rate,
  replay,
  message,
  rongliang,
};

// 柱状图数据
const barChartData = {
  categories: ["医疗教育", "人居环境", "民生保障", "创业扶持"],
  values: [25, 15, 20, 30],
  // 为每个柱子定义不同的颜色渐变
  gradients: [
    {
      colorStops: [
        { offset: 0, color: "#00E4FF" },
        { offset: 1, color: "#0073D6" },
      ],
    },
    {
      colorStops: [
        { offset: 0, color: "#A855F7" },
        { offset: 1, color: "#7E22CE" },
      ],
    },
    {
      colorStops: [
        { offset: 0, color: "#FACC15" },
        { offset: 1, color: "#CA8A04" },
      ],
    },
    {
      colorStops: [
        { offset: 0, color: "#7C3AED" },
        { offset: 1, color: "#4C1D95" },
      ],
    },
  ],
};

// 统计卡片数据
const statsData = [
  {
    title: "收取容量",
    value: "50",
    icon: "rongliang",
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "回复容量",
    value: "40",
    icon: "message",
    color: "from-purple-500 to-purple-700",
  },
  {
    title: "回复率",
    value: "80%",
    icon: "replay",
    color: "from-green-500 to-green-700",
  },
  {
    title: "办结率",
    value: "100%",
    icon: "rate",
    color: "from-cyan-500 to-cyan-700",
  },
];

export function P1() {
  // 图表配置
  const chartOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "10%",
      right: "10%",
      bottom: "10%",
      top: "5%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: barChartData.categories,
        axisLine: {
          lineStyle: {
            color: "#42DEFF",
          },
        },
        axisLabel: {
          color: "#42DEFF",
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        max: 45,
        axisLine: {
          lineStyle: {
            color: "#42DEFF",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(66, 222, 255, 0.1)",
          },
        },
        axisLabel: {
          color: "#42DEFF",
        },
        splitArea: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: "数量",
        type: "bar",
        barWidth: "60%",
        data: barChartData.values.map((value, index) => ({
          value,
          itemStyle: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              barChartData.gradients[index].colorStops
            ),
            borderRadius: 4,
          },
        })),
      },
    ],
  };

  return (
    <Block title={"社情民意"} className="h-full w-full p-2">
      <div className="grid grid-cols-1 grid-rows-2 gap-4 h-full">
        {/* 柱状图 */}
        <div className="p-2 flex-1 relative overflow-hidden">
          <div className="text-[#D1D5DB] text-sm mb-2 flex items-center gap-1">
            <span className="text-xs font-bold mr-2">单位: 个</span>
          </div>
          <Chart option={chartOption} className="w-full h-[calc(100%-24px)]" />
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex gap-4 items-center bg-[#0A1F44] rounded-lg border border-[#0073D6] p-3 relative overflow-hidden"
            >
              <img
                className="w-14 h-14"
                src={iconMap[stat.icon as keyof typeof iconMap]}
                alt=""
              />
              <div>
                <div className="text-[#42DEFF] text-xl mb-1">{stat.title}</div>
                <div className="text-xl font-bold text-white mt-2">
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
