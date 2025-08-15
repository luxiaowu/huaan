import * as echarts from "echarts";
import { useEffect, useRef } from "react";
import { Block } from "../../components/block";
import { Chart, type EChartsOption } from "../../components/charts";

// 图表配置数据
const categoryChartOption: EChartsOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderColor: "#00FFFF",
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    top: "6%",
    left: "8%",
    right: "8%",
    bottom: "2%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: ["政策", "村务", "生活", "农业", "其他"],
    axisLine: {
      lineStyle: {
        color: "#4F9FFF",
        width: 1,
      },
    },
    axisLabel: {
      color: "#ffffff",
      fontSize: 12,
      margin: 15,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: function (value: any) {
      return Math.ceil(value.max / 100) * 100;
    },
    interval: "auto",
    splitLine: {
      lineStyle: {
        color: "rgba(79, 159, 255, 0.15)",
        type: "dashed",
        width: 1,
        dashArray: [5, 5],
      },
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: "#ffffff",
      fontSize: 11,
      margin: 12,
      interval: function (index: number, value: string) {
        const num = parseInt(value);
        return num % 100 === 0 || num === 0;
      },
    },
  },
  series: [
    {
      type: "bar",
      data: [300, 280, 290, 320, 200],
      itemStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "#00FFFF" },
            { offset: 1, color: "#0066CC" },
          ],
        },
        borderRadius: [2, 2, 0, 0],
      },
      barWidth: 25,
      barGap: "30%",
    },
  ],
};

const regionChartOption: EChartsOption = {
  backgroundColor: "transparent",
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "line",
      lineStyle: {
        color: "#00FFFF",
        type: "dashed",
      },
    },
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderColor: "#00FFFF",
    textStyle: {
      color: "#fff",
    },
  },
  grid: {
    top: "6%",
    left: "8%",
    right: "8%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: {
    type: "category",
    data: [
      "华丰",
      "丰山",
      "沙里",
      "新丰",
      "高安",
      "高丰",
      "马坑",
      "湖林",
      "仙部",
    ],
    axisLine: {
      lineStyle: {
        color: "#4F9FFF",
        width: 1,
      },
    },
    axisLabel: {
      color: "#ffffff",
      fontSize: 12,
      rotate: 45,
      margin: 15,
      interval: 0,
    },
    axisTick: {
      show: false,
    },
  },
  yAxis: {
    type: "value",
    min: 0,
    max: function (value: any) {
      return Math.ceil(value.max / 50) * 50;
    },
    interval: "auto",
    splitLine: {
      lineStyle: {
        color: "rgba(79, 159, 255, 0.15)",
        type: "dashed",
        width: 1,
        dashArray: [5, 5],
      },
    },
    axisLine: {
      show: false,
    },
    axisLabel: {
      color: "#ffffff",
      fontSize: 11,
      margin: 12,
      interval: function (index: number, value: string) {
        const num = parseInt(value);
        return num % 50 === 0 || num === 0;
      },
    },
  },
  series: [
    {
      type: "line",
      data: [140, 120, 90, 130, 80, 70, 60, 100, 120],
      smooth: true,
      symbol: "circle",
      symbolSize: 6,
      lineStyle: {
        color: "#00A2FF",
        width: 3,
        shadowColor: "rgba(0, 162, 255, 0.3)",
        shadowBlur: 8,
      },
      itemStyle: {
        color: "#00A2FF",
        borderColor: "#fff",
        borderWidth: 1,
      },
      areaStyle: {
        color: {
          type: "linear",
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            { offset: 0, color: "rgba(0, 162, 255, 0.2)" },
            { offset: 1, color: "rgba(0, 82, 204, 0.02)" },
          ],
        },
      },
    },
  ],
};

// 主数据
export function P1() {
  return (
    <Block title={"便民咨询"}>
      <div className="bg-[#0C1E3E] rounded-lg p-8 h-full flex flex-col">
        {/* 顶部统计数据 */}
        <div className="flex items-center mb-6 mt-2 pl-4">
          <div className="flex-1">
            <div className="text-[#00FFFF] text-2xl font-bold">1,256</div>
            <div className="text-white text-lg mb-1">服务咨询</div>
          </div>
          <div className="flex-1">
            <div className="text-[#00FFFF] text-2xl font-bold">98.7%</div>
            <div className="text-white text-lg mb-1">满意度</div>
          </div>
        </div>

        {/* 第一个图表 - 按类别统计 */}
        <div className="h-[35%] w-full mb-4">
          <Chart option={categoryChartOption} />
        </div>

        {/* 第二个图表 - 按地区统计 */}
        <div className="h-[45%] w-full">
          <Chart option={regionChartOption} />
        </div>
      </div>
    </Block>
  );
}
