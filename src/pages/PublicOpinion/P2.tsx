import * as echarts from 'echarts';
import { useEffect, useRef, useState } from 'react';
import { Block } from '../../components/block';

// 定义不同标签页的数据
const tabData = {
  '供需大厅': {
    total: 3210,
    currentMonth: 218,
    lastMonth: 201,
    chartData: [180, 150, 220, 140, 100],
    categories: ['农产品', '农机', '劳务', '技术', '其他']
  },
  '村庄活动': {
    total: 1560,
    currentMonth: 132,
    lastMonth: 118,
    chartData: [90, 120, 180, 80, 70],
    categories: ['文化', '体育', '教育', '医疗', '其他']
  },
  '村聊圈': {
    total: 2840,
    currentMonth: 196,
    lastMonth: 178,
    chartData: [150, 130, 160, 110, 90],
    categories: ['政策讨论', '生活资讯', '农业技术', '求职信息', '其他']
  }
};

export function P2() {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);
  const [activeTab, setActiveTab] = useState('供需大厅');
  const [data, setData] = useState(tabData['供需大厅']);

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
    <Block title={'数据统计'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col">
        {/* 顶部标签页 - 使用Tailwind CSS实现红框效果 */}
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
          <div className="text-center">
            <div className="text-white text-lg mb-1">累计</div>
            <div className="text-[#00FFBE] text-3xl font-bold">{data.total.toLocaleString()}</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">本月</div>
            <div className="text-[#00A2FF] text-3xl font-bold">{data.currentMonth}</div>
          </div>
          <div className="text-center">
            <div className="text-white text-lg mb-1">上月</div>
            <div className="text-[#00A2FF] text-3xl font-bold">{data.lastMonth}</div>
          </div>
        </div>

        {/* 图表 */}
        <div ref={chartRef} className="h-[60%] w-full"></div>
      </div>
    </Block>
  );
}