import { useRef, useEffect, useState } from 'react';
import { Block } from '../../components/block';
import { Chart,  } from '../../components/charts';
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';

// 定义不同标签页的数据 - 匹配设计图
const tabData = {
  招工就业: {
    title: '招工就业',
    stats: [
      { name: '培训人数', value: 1250, growth: '+6.2% 同比' },
      { name: '培训项', value: 368, growth: '' },
      { name: '开课人次', value: 2056, growth: '+7.7% 同比' },
    ],
    chartData: [220, 165, 135, 110, 130],
    categories: ['营工', '技工', '销售', '管理', '服务'],
  },
  农技课堂: {
    title: '农技课堂',
    stats: [
      { name: '培训人数', value: 850, growth: '+5.3% 同比' },
      { name: '培训项', value: 240, growth: '' },
      { name: '开课人次', value: 1520, growth: '+6.8% 同比' },
    ],
    chartData: [180, 150, 120, 90, 110],
    categories: ['种植', '养殖', '农机', '加工', '电商'],
  },
  培训证书: {
    title: '培训证书',
    stats: [
      { name: '培训人数', value: 620, growth: '+8.5% 同比' },
      { name: '培训项', value: 180, growth: '' },
      { name: '开课人次', value: 1250, growth: '+9.2% 同比' },
    ],
    chartData: [150, 130, 100, 80, 95],
    categories: ['职业资格', '技能等级', '专项能力', '培训合格', '其他证书'],
  },
};

export function P4() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('招工就业');
  const [data, setData] = useState(tabData['招工就业']);

  // 切换标签页
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setData(tabData[tab]);
  };

  // 图表配置
  const chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      top: 20,
      left: '5%',
      right: '5%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: data.categories,
      axisLine: {
        lineStyle: {
          color: '#4F9FFF',
        },
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12,
      },
    },
    yAxis: {
      type: 'value',
      max: 220,
      interval: 55,
      splitLine: {
        lineStyle: {
          color: 'rgba(79, 159, 255, 0.2)',
          type: 'dashed',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#4F9FFF',
        },
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 12,
      },
    },
    series: [
      {
        type: 'bar',
        data: data.chartData,
        itemStyle: {
          color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#00B8FF' },
            { offset: 1, color: '#0066FF' },
          ]),
        },
        barWidth: 30,
      },
    ],
  };

  return (
    <Block title={
      <div className="flex items-center gap-2">
        <div className="w-[4px] h-[16px] bg-[#00E4FF] rounded-none"></div>
        <div className="text-white text-[18px] font-bold">就业培训</div>
      </div>
    } className="h-full">
      <div className="bg-[#01193C]/50 rounded-lg p-4 h-full flex flex-col border border-[#0072D5]/30">
        {/* 标签页 */}
        <div className="flex gap-2 mb-6 w-full overflow-x-auto pb-2">
          {Object.keys(tabData).map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`px-6 py-2 text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer
                ${activeTab === tab
                  ? 'bg-[#0072D5] text-white rounded-md'
                  : 'bg-[rgba(30,80,144,0.4)] text-[#5BDEAB] hover:text-white rounded-md border border-[rgba(79,159,255,0.3)]'}
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* 统计数据 */}
        <div className="flex justify-center items-center gap-8 mb-6 mt-2 w-full">
          {data.stats.map((stat, index) => (
            <div key={index} className="text-center flex-1 max-w-[140px]">
              <div className="text-[#8AB4D9] text-sm mb-1">{stat.name}</div>
              <div className="text-white text-3xl font-bold flex flex-col items-center justify-center">
                {stat.value.toLocaleString()}
                {stat.growth && (
                  <span className="text-[#00E4FF] text-xs mt-1 font-normal">
                    {stat.growth}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* 图表 */}
        <div className="h-[60%] w-full">
          <Chart
            ref={chartRef}
            style={{ width: '100%', height: '100%' }}
            option={chartOption}
          />
        </div>
      </div>
    </Block>
  );
}