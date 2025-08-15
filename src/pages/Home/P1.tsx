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
      left: "12%",
      right: "12%",
      bottom: "10%",
      top: "10%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: barChartData.categories,
        axisLine: {
          show: false, // 隐藏坐标轴
        },
        axisTick: {
          show: false, // 隐藏刻度线
        },
        axisLabel: {
          color: "#8AB4D9",
          interval: 0, // 强制显示所有标签
          rotate: 0, // 不旋转标签
          fontSize: 10, // 确保字体大小合适
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        max: 45,
        interval: 15, // 设置刻度间隔为15
        axisLine: {
          show: false, // 隐藏坐标轴
        },
        axisTick: {
          show: false, // 隐藏刻度线
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(66, 222, 255, 0.1)",
            type: "dashed", // 设置为虚线
          },
        },
        axisLabel: {
          color: "#A7C4E9",
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
    <Block title={"社情民意"} className="h-full w-full px-2">
      <div className="grid grid-cols-1 grid-rows-[2fr_1fr] gap-4 h-full">
        {/* 柱状图 */}
        <div className="p-2 flex-1 relative overflow-hidden">
          <div className="text-[#A7C4E9] text-sm mb-2 flex items-center gap-1">
            <span className="text-xs font-bold mr-2">单位: 个</span>
          </div>
          <Chart option={chartOption} className="w-full h-[calc(100%-24px)]" />
        </div>

        {/* 统计卡片 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-2 px-2">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="flex gap-2 items-start bg-[#0A1F44] rounded-lg border border-[#1B3B71] p-2 relative overflow-hidden"
            >
              <img
                className="w-10 h-10"
                src={iconMap[stat.icon as keyof typeof iconMap]}
                alt=""
              />
              <div>
                <div className="text-[#5BDEAB] text-lg ">{stat.title}</div>
                <div className="text-lg font-bold  text-[#00E4FF]">
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
