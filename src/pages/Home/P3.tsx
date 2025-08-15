import { Block } from "../../components/block";
import { Chart, type EChartsOption } from "../../components/charts";
import { useRef, useEffect } from "react";
import * as echarts from "echarts";

export function P3() {
  const chartRef = useRef<HTMLDivElement>(null);

  // 产业数据 - 匹配设计图中的百分比
  const industryData = [
    { name: "矿产资源", value: 31.12, color: "#00B8FF" },
    { name: "文化旅游产业", value: 34.12, color: "#FFD600" },
    { name: "农业产业", value: 34.12, color: "#00E4FF" },
  ];

  // 饼图配置
  const pieOption: EChartsOption = {
    title: {
      text: "县域产业构成图",
      left: "center",
      top: 20,
      textStyle: {
        color: "#8AB4D9",
        fontSize: 16,
        fontWeight: "normal",
      },
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c}%",
    },
    legend: {
      data: ["矿产资源", "农业产业", "文化旅游产业"],
      bottom: 10,
      left: "center",
      textStyle: {
        color: "#8AB4D9",
        fontSize: 12,
      },
      itemWidth: 12,
      itemHeight: 12,
    },
    series: [
      {
        name: "产业占比",
        type: "pie",
        radius: ["40%", "70%"],
        center: ["50%", "50%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#011736",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{b}\n{c}%",
          color: "#8AB4D9",
          fontSize: 12,
          fontWeight: "normal",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 14,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: true,
          lineStyle: {
            color: "#8AB4D9",
            width: 1,
          },
          length: 20,
          length2: 30,
        },
        data: industryData.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: item.color,
          },
        })),
        // 饼图中心文本
        centerText: [
          {
            text: "总产值",
            color: "#FFFFFF",
            fontSize: 16,
            fontWeight: "bold",
          },
          {
            text: "3个主导产业",
            color: "#42DEFF",
            fontSize: 12,
          },
        ],
      },
    ],
  };

  useEffect(() => {
    if (chartRef.current) {
      const chart = (chartRef.current as any).getInstance();
      if (chart) {
        // 重写饼图绘制完成后的钩子函数
        chart.on("finished", function () {
          const series = chart.getOption().series[0];
          const center = series.center;
          const radius = series.radius;
          const centerText = series.centerText;

          // 清除之前的中心文本
          // chart.getZr().clear();

          // 计算中心位置 - 修复坐标系问题
          // 使用百分比直接计算中心点像素位置
          const pixelCenter = [
            chart.getWidth() * (parseFloat(center[0]) / 100),
            chart.getHeight() * (parseFloat(center[1]) / 100),
          ];

          // 绘制中心文本
          centerText.forEach((textItem: any, index: number) => {
            const textStyle = {
              fill: textItem.color,
              fontSize: textItem.fontSize,
              fontWeight: textItem.fontWeight,
              textBaseline: "middle",
              textAlign: "center",
            };

            chart.getZr().add(
              new echarts.graphic.Text({
                style: {
                  ...textStyle,
                  text: textItem.text,
                },
                position: [pixelCenter[0], pixelCenter[1] - 10 + index * 20],
              })
            );
          });
        });

        // 触发重绘
        chart.setOption(pieOption);
      }
    }
  }, []);

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
    <Block className="h-full w-full px-2" title="县域产业">
      <div className="w-full h-full p-4 flex flex-col">
        {/* 图表容器 */}
        <div className="flex-1 relative border border-[#0072D5]/30 rounded-md bg-[#01193C]/50 p-4">
          <Chart
            ref={chartRef}
            style={{ width: "100%", height: "100%" }}
            option={pieOption}
          />
        </div>

        {/* 数据展示 - 匹配设计图中的34.44% */}
        <div className="grid grid-cols-3 gap-0 mt-4">
          {[
            { name: "矿产资源", value: 34.44, color: "#00B8FF" },
            { name: "文化旅游产业", value: 34.44, color: "#FFD600" },
            { name: "农业产业", value: 34.44, color: "#00E4FF" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center p-2">
              <div className="flex items-center gap-2 mb-1">
                <div
                  className="w-3 h-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="text-white text-[14px]">{item.name}</div>
              </div>
              <div className="text-[#00E4FF] text-[20px] font-bold">
                {item.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
