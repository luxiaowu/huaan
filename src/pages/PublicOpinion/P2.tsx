import { useEffect, useRef, useState } from "react";
import { Block } from "../../components/block";
import { Chart } from "../../components/charts";
import type { EChartsOption } from "../../components/charts";

// 定义不同标签页的数据
const tabData = {
  供需大厅: {
    total: 3210,
    currentMonth: 218,
    lastMonth: 201,
    chartData: [180, 150, 220, 140, 100],
    categories: ["农产品", "农机", "劳务", "技术", "其他"],
  },
  村庄活动: {
    total: 1560,
    currentMonth: 132,
    lastMonth: 118,
    chartData: [90, 120, 180, 80, 70],
    categories: ["文化", "体育", "教育", "医疗", "其他"],
  },
  村聊圈: {
    total: 2840,
    currentMonth: 196,
    lastMonth: 178,
    chartData: [150, 130, 160, 110, 90],
    categories: ["政策讨论", "生活资讯", "农业技术", "求职信息", "其他"],
  },
};

export function P2() {
  const [activeTab, setActiveTab] = useState("供需大厅");
  const [data, setData] = useState(tabData["供需大厅"]);

  // 切换标签页
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setData(tabData[tab as keyof typeof tabData]);
  };

  // 图表配置
  const chartOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      top: 20,
      left: "5%",
      right: "5%",
      bottom: "10%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: data.categories,
      axisLine: {
        lineStyle: {
          color: "#4F9FFF",
        },
      },
      axisLabel: {
        color: "#ffffff",
        fontSize: 12,
      },
    },
    yAxis: {
      type: "value",
      splitLine: {
        lineStyle: {
          color: "rgba(79, 159, 255, 0.2)",
        },
      },
      axisLine: {
        lineStyle: {
          color: "#4F9FFF",
        },
      },
      axisLabel: {
        color: "#ffffff",
        fontSize: 12,
      },
    },
    series: [
      {
        type: "bar",
        data: data.chartData,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#00FFBE" },
              { offset: 1, color: "#0080FF" },
            ],
          },
        },
        barWidth: 30,
      },
    ],
  };

  return (
    <Block title={"数据统计"}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col">
        {/* 顶部标签页 - 内容撑开宽度 */}
        <div className="flex justify-center  w-full">
          <div className="w-full flex bg-[rgba(12,30,62,0.8)] rounded-lg p-1 shadow-lg gap-6">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`flex-1 px-6 py-2.5 text-sm font-medium transition-all bg-[rgba(30,80,144,0.4)] duration-300 whitespace-nowrap cursor-pointer  border border-[rgba(79,159,255,0.3)] ${
                  activeTab === tab
                    ? " text-[#00FFFF] shadow-inner"
                    : "text-[#5BDEAB] hover:text-white hover:bg-[rgba(30,80,144,0.4)]"
                } rounded-md`}
                style={{
                  borderRadius: "4px",
                  margin: "0 1px",
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* 统计数据 */}
        <div className="flex justify-between items-center mb-8 mt-2 px-4">
          <div className="text-center">
            <div className="text-white text-lg mb-1">累计</div>
            <div className="text-[#00FFBE] text-3xl font-bold">
              {data.total.toLocaleString()}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">本月</div>
            <div className="text-[#00A2FF] text-3xl font-bold">
              {data.currentMonth}
            </div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">上月</div>
            <div className="text-[#00A2FF] text-3xl font-bold">
              {data.lastMonth}
            </div>
          </div>
        </div>

        {/* 图表 */}
        <div className="h-[60%] w-full">
          <Chart option={chartOption} />
        </div>
      </div>
    </Block>
  );
}
