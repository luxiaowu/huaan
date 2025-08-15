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
      top: 0,
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
      bottom: 0, // 增加与环形图的距离
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
        radius: ["36%", "60%"], // 缩小环形图半径，增加空白区域
        center: ["50%", "50%"], // 调整中心位置以保持平衡
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 0,
          borderColor: "#FFFFFF",
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
          length: 15,
          length2: 20,
        },
        data: industryData.map((item) => ({
          value: item.value,
          name: item.name,
          itemStyle: {
            color: item.color,
          },
          // 为文化旅游产业设置特殊的标签位置
          label: {
            formatter: (params: any) => {
              return `{value|${params.name}}\n{name|${params.value}%}`;
            },
            rich: {
              name: {
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "normal",
                align: "center",
              },
              value: {
                color: item.color,
                fontSize: 12,
                fontWeight: "normal",
                align: "center",
              },
            },
          },
          // 为每个数据项设置与区域颜色一致的线条
          labelLine: {
            lineStyle: {
              color: item.color,
            },
          },
        })),
        // 饼图中心文本
        // centerText: [
        //   {
        //     text: "总产值",
        //     color: "#fff",
        //     fontSize: 15,
        // },
        // {
        //   text: "3个主导产业",
        //   color: "#8AB4D9",
        //   fontSize: 12,
        // },
        // ],
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
                position: [150, 110 + index * 20],
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
    <Block className="h-full w-full px-2 " title="县域产业">
      <div className="w-full h-full p-4 flex flex-col ">
        {/* 图表容器 */}
        <div
          className="flex-1 relative  rounded-md  w-full"
          style={{
            backgroundImage: "url(/img/circle.png)",
            backgroundSize: "200px 200px", // 缩小背景图大小以匹配环形图
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Chart
            ref={chartRef}
            style={{ width: "100%", height: "100%" }}
            option={pieOption}
          />
        </div>

        {/* 数据展示 - 匹配设计图中的34.44% */}
        <div
          className="grid grid-cols-1 mt-4 w-full
"
        >
          {[
            { name: "矿产资源", value: 34.44, color: "#00B8FF" },
            { name: "文化旅游产业", value: 34.44, color: "#FFD600" },
            { name: "农业产业", value: 34.44, color: "#00E4FF" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-2 gap-x-20"
            >
              <div className="flex items-center gap-x-2 ">
                <div
                  className="w-3 h-3"
                  style={{ backgroundColor: item.color }}
                ></div>
                <div className="text-white text-[14px] flex">{item.name}</div>
              </div>
              <div className="text-[#00E4FF] text-[15px] font-bold">
                {item.value}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </Block>
  );
}
