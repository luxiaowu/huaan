import * as echarts from "echarts";
import { Block } from "../../components/block";
import { Chart, type EChartsOption } from "../../components/charts";
import { useRef, useEffect } from "react";

export function P4() {
  const chartRef = useRef<HTMLDivElement>(null);

  // 生产总值数据
  const gdpData = {
    year2023: [38, 70, 45],
    year2024: [42, 85, 50],
    industries: ["第一产业增加值", "第二产业增加值", "第三产业增加值"],
  };

  // 柱状图配置
  const barOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      formatter: function (params: any) {
        return `${params[0].name}<br/>${params[0].seriesName}: ${params[0].value}亿元<br/>${params[1].seriesName}: ${params[1].value}亿元`;
      },
    },
    legend: {
      data: ["2024", "2023"],
      left: 0,
      top: 0,
      textStyle: {
        color: "#8AB4D9",
        fontSize: 14,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "10%",
      top: "15%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: gdpData.industries,
        axisLine: {
          lineStyle: {
            color: "#0072D5",
          },
        },
        axisLabel: {
          color: "#8AB4D9",
          fontSize: 12,
          rotate: 0,
          interval: 0,
          formatter: function (value: string) {
            return value;
          },
        },
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        nameTextStyle: {
          color: "#8AB4D9",
          fontSize: 12,
          padding: [0, 0, 0, 40],
        },
        axisLine: {
          lineStyle: {
            color: "#0072D5",
          },
        },
        axisLabel: {
          color: "#8AB4D9",
          fontSize: 12,
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 114, 213, 0.2)",
            type: "dashed",
          },
        },
        max: 100,
      },
    ],
    series: [
      {
        name: "2024",
        type: "bar",
        barWidth: "30%",
        data: gdpData.year2024,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#00B8FF" },
            { offset: 1, color: "#0072D5" },
          ]),
          borderRadius: [4, 4, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#00E4FF" },
              { offset: 1, color: "#0096FF" },
            ]),
          },
        },
      },
      {
        name: "2023",
        type: "bar",
        barWidth: "30%",
        data: gdpData.year2023,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: "#42DEFF" },
            { offset: 1, color: "#0055A8" },
          ]),
          borderRadius: [4, 4, 0, 0],
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "#8AEEFF" },
              { offset: 1, color: "#0072D5" },
            ]),
          },
        },
      },
    ],
  };

  // 监听窗口大小变化，调整图表大小
  useEffect(() => {
    const resizeHandler = () => {
      if (chartRef.current) {
        const chart = (chartRef.current as any).getInstance();
        if (chart) {
          chart.resize();
        }
      }
    };

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <Block className="h-full w-full px-2" title={"华安县地区生产总值"}>
      <div className="w-full h-full p-4 flex flex-col">
        {/* 单位说明 */}
        <div className="text-[#8AB4D9] text-[14px] mb-1 self-start pl-2">
          单位: 亿元
        </div>

        {/* 图表容器 */}
        <div className="flex-1 relative   pxx-4">
          <Chart
            ref={chartRef}
            style={{ width: "100%", height: "100%" }}
            option={barOption}
          />
        </div>
      </div>
    </Block>
  );
}
