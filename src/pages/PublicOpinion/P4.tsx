import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import { Block } from '../../components/block';

// 定义不同标签页的数据
const tabData = {
  '招工就业': {
    title: '招工就业',
    stats: [
      { name: '招聘人数', value: 1250, growth: '+8.2% 同比' },
      { name: '职位数', value: 368, growth: '' },
      { name: '求职人数', value: 2056, growth: '+5.7% 同比' }
    ],
    chartData: [280, 220, 180, 120, 160],
    categories: ['普工', '技工', '销售', '管理', '服务']
  },
  '农技课堂': {
    title: '农技课堂',
    stats: [
      { name: '培训次数', value: 135, growth: '+12.5% 同比' },
      { name: '参与人数', value: 2156, growth: '+9.3% 同比' },
      { name: '满意度', value: 92, growth: '%' }
    ],
    chartData: [180, 250, 150, 220, 100],
    categories: ['种植', '养殖', '农机', '加工', '电商']
  },
  '培训汇总': {
    title: '培训汇总',
    stats: [
      { name: '总培训次数', value: 320, growth: '+15.8% 同比' },
      { name: '总参与人数', value: 4850, growth: '+11.2% 同比' },
      { name: '就业率', value: 78.5, growth: '%' }
    ],
    chartData: [320, 280, 350, 220, 180],
    categories: ['第一季度', '第二季度', '第三季度', '第四季度', '年度合计']
  }
};

export function P4() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [activeTab, setActiveTab] = useState('招工就业');
  const [data, setData] = useState(tabData['招工就业']);

  // 切换标签页
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setData(tabData[tab]);
    // 更新图表数据
    updateChart();
  };

  // 更新图表
  const updateChart = () => {
    if (chartInstance.current) {
      chartInstance.current.setOption({
        xAxis: {
          data: data.categories
        },
        series: [
          {
            data: data.chartData
          }
        ]
      });
    }
  };

  // 初始化图表
  useEffect(() => {
    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current);
      const option = {
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
          data: data.categories,
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
            data: data.chartData,
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
      chartInstance.current.setOption(option);
    }

    // 响应窗口大小变化
    const resizeHandler = () => {
      chartInstance.current?.resize();
    };
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
      chartInstance.current?.dispose();
    };
  }, []);

  return (
    <Block title={'就业培训'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col">
        <div className="flex border-2 border-[#0080FF] rounded-md overflow-hidden mb-6 w-fit shadow-lg shadow-[#0080FF]/20">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeTab === tab
                  ? 'bg-[#0080FF] text-white border-b-2 border-[#00FFBE]'
                  : 'bg-transparent text-[#4F9FFF] hover:bg-[#1A3A6E]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="flex justify-between items-center mb-8 mt-2 px-4">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center flex-1">
              <div className="text-white text-lg mb-1">{stat.name}</div>
              <div className="text-[#00FFBE] text-3xl font-bold flex items-center justify-center">
                {stat.value}
                {stat.growth && (
                  <span className="text-[#00A2FF] text-sm ml-2 font-normal">{stat.growth}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 图表 */}
        <div ref={chartRef} className="h-[60%] w-full"></div>
      </div>
    </Block>
  );
}