import { useRef, useEffect } from 'react';
import { Block } from '../../components/block';
import { Chart, type EChartsOption } from '../../components/charts';
import * as echarts from 'echarts';

// 定义图表数据 - 匹配设计图
const categoryData = [
  { name: '友好', value: 275 },
  { name: '材料', value: 250 },
  { name: '生活', value: 250 },
  { name: '农业', value: 300 },
  { name: '网络', value: 175 }
];

const regionData = [
  { name: '松涛', value: 130 },
  { name: '半山', value: 115 },
  { name: '少阳', value: 85 },
  { name: '新时', value: 135 },
  { name: '院东', value: 75 },
  { name: '高安', value: 75 },
  { name: '马航', value: 100 },
  { name: '祝岱', value: 120 },
  { name: '包', value: 130 }
];

export function P3() {
  const chartRef1 = useRef<HTMLDivElement>(null);
  const chartRef2 = useRef<HTMLDivElement>(null);

  // 第一个图表配置 - 柱状图
  const barChartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top: 20,
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: categoryData.map(item => item.name),
      axisLine: {
        lineStyle: {
          color: '#4F9FFF'
        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12
      }
    },
    yAxis: {
      type: 'value',
      max: 300,
      interval: 75,
      splitLine: {
        lineStyle: {
            type: 'dashed',
          color: 'rgba(79, 159, 255, 0.2)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#4F9FFF'
        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12
      }
    },
    series: [
      {
        type: 'bar',
        data: categoryData.map(item => item.value),
        itemStyle: {
          color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00B8FF' },
            { offset: 1, color: '#0066FF' }
          ])
        },
        barWidth: 30
      }
    ]
  };

  // 第二个图表配置 - 折线图
  const lineChartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      top: 20,
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: regionData.map(item => item.name),
      axisLine: {
        lineStyle: {
          color: '#4F9FFF'
        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12
      }
    },
     yAxis: {
      type: 'value',
      max: 140,
      interval: 35,
      splitLine: {
        lineStyle: {
          color: 'rgba(79, 159, 255, 0.2)',
          type: 'dashed',  // 设置为虚线
          width: 1
        }
      },
      axisLine: {
        lineStyle: {
          color: '#4F9FFF'
        }
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12
      }
    },
    series: [
      {
        type: 'line',
        data: regionData.map(item => item.value),
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#00E4FF'
        },
        lineStyle: {
          color: '#00E4FF',
          width: 2
        },
        areaStyle: {
          color:  new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 228, 255, 0.3)' },
            { offset: 1, color: 'rgba(0, 228, 255, 0)' }
          ])
        }
      }
    ]
  };

  // 监听窗口大小变化，调整图表大小
  useEffect(() => {
    const resizeHandler = () => {
      // 图表会自动处理大小调整
    };

    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return (
    <Block title={
      <div className="flex items-center gap-2">
        <div className="text-[#00E4FF] text-[24px] font-bold">随手拍</div>
      </div>
    } className="h-full">
      <div className="bg-[#01193C]/50 rounded-lg p-4 h-full flex flex-col border border-[#0072D5]/30">
        {/* 顶部统计数据 */}
        <div className="flex justify-center items-center gap-16 mb-6 mt-2">
          <div className="text-center">
            <div className="text-white text-lg mb-1">上传数量</div>
            <div className="text-[#00FFBE] text-4xl font-bold">842</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">回复率</div>
            <div className="text-[#00A2FF] text-4xl font-bold">95.2%</div>
          </div>
        </div>

        {/* 第一个图表 - 柱状图 */}
        <div className="h-[40%] w-full mb-8">
          <Chart
            ref={chartRef1}
            style={{ width: '100%', height: '100%' }}
            option={barChartOption}
          />
        </div>

        {/* 第二个图表 - 折线图 */}
        <div className="h-[40%] w-full">
          <Chart
            ref={chartRef2}
            style={{ width: '100%', height: '100%' }}
            option={lineChartOption}
          />
        </div>
      </div>
    </Block>
  );
}