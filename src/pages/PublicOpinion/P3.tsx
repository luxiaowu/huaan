import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Block } from '../../components/block';

// 定义图表数据
const categoryData = [
  { name: '环境', value: 250 },
  { name: '交通', value: 200 },
  { name: '公共设施', value: 300 },
  { name: '安全', value: 150 },
  { name: '其他', value: 200 }
];

const regionData = [
  { name: '华丰', value: 120 },
  { name: '丰山', value: 100 },
  { name: '沙建', value: 90 },
  { name: '新圩', value: 110 },
  { name: '高安', value: 70 },
  { name: '高车', value: 60 },
  { name: '马坑', value: 50 },
  { name: '湖林', value: 80 },
  { name: '仙都', value: 110 }
];

export function P3() {
  const chartRef1 = useRef<HTMLDivElement>(null);
  const chartRef2 = useRef<HTMLDivElement>(null);
  const chartInstance1 = useRef<echarts.ECharts | null>(null);
  const chartInstance2 = useRef<echarts.ECharts | null>(null);

  // 初始化图表
  useEffect(() => {
    // 第一个图表 - 按类别统计
    if (chartRef1.current) {
      chartInstance1.current = echarts.init(chartRef1.current);
      const option1 = {
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
          splitLine: {
            lineStyle: {
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
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#00FFBE' },
                { offset: 1, color: '#0080FF' }
              ])
            },
            barWidth: 30
          }
        ]
      };
      chartInstance1.current.setOption(option1);
    }

    // 第二个图表 - 按地区统计
    if (chartRef2.current) {
      chartInstance2.current = echarts.init(chartRef2.current);
      const option2 = {
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
          data: regionData.map(item => item.name),
          axisLine: {
            lineStyle: {
              color: '#4F9FFF'
            }
          },
          axisLabel: {
            color: '#ffffff',
            fontSize: 12,
            rotate: 30
          }
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
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
          },
          max: 150
        },
        series: [
          {
            type: 'bar',
            data: regionData.map(item => item.value),
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#00A2FF' },
                { offset: 1, color: '#0052CC' }
              ])
            },
            barWidth: 20
          }
        ]
      };
      chartInstance2.current.setOption(option2);
    }

    // 响应窗口大小变化
    const resizeHandler = () => {
      chartInstance1.current?.resize();
      chartInstance2.current?.resize();
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      chartInstance1.current?.dispose();
      chartInstance2.current?.dispose();
    };
  }, []);

  return (
    <Block title={'随手拍'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col">
        {/* 顶部统计数据 */}
        <div className="flex justify-center items-center gap-12 mb-8 mt-4">
          <div className="text-center">
            <div className="text-white text-lg mb-1">上传数量</div>
            <div className="text-[#00FFBE] text-4xl font-bold">842</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">回复率</div>
            <div className="text-[#00A2FF] text-4xl font-bold">95.2%</div>
          </div>
        </div>

        {/* 第一个图表 - 按类别统计 */}
        <div ref={chartRef1} className="h-[40%] w-full mb-6"></div>

        {/* 第二个图表 - 按地区统计 */}
        <div ref={chartRef2} className="h-[40%] w-full"></div>
      </div>
    </Block>
  );
}