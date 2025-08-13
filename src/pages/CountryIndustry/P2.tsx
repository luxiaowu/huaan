import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Block } from '../../components/block';
import { Chart } from '../../components/charts';

// 茶叶产业数据
const teaIndustryData = {
  totalArea: 8.6,
  growthRate: 3.5,
  annualOutput: 1.2,
  outputValue: 1.28,
  varieties: [
    { name: '铁观音', area: 4.2 },
    { name: '肉桂', area: 2.8 },
    { name: '水仙', area: 1.6 },
  ],
  townDistribution: [
    { name: '华丰镇', value: 30 },
    { name: '丰山镇', value: 25 },
    { name: '沙建镇', value: 20 },
    { name: '新圩镇', value: 15 },
    { name: '高安镇', value: 10 },
  ],
  varietyOutputValue: [
    { name: '铁观音', value: 0.65 },
    { name: '肉桂', value: 0.4 },
    { name: '水仙', value: 0.18 },
    { name: '其他', value: 0.05 },
  ],
};

// 饼图配置
const pieOption = {
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {c}%',
    textStyle: { color: '#fff' }
  },
  color: ['#00C48C', '#008FFB', '#FEB019', '#775DD0', '#FF6B3B'],
  series: [{
    name: '乡镇茶叶产量占比',
    type: 'pie',
    radius: ['40%', '70%'],
    center: ['50%', '50%'],
    avoidLabelOverlap: false,
    itemStyle: {
      borderColor: '#0C1E3E',
      borderWidth: 2
    },
    label: {
      show: false
    },
    emphasis: {
      label: {
        show: true,
        fontSize: '16',
        fontWeight: 'bold',
        color: '#fff'
      }
    },
    labelLine: {
      show: false
    },
    data: teaIndustryData.townDistribution
  }]
};

// 柱状图配置
const barOption = {
  tooltip: {
    trigger: 'axis',
    axisPointer: { type: 'shadow' },
    textStyle: { color: '#fff' },
    backgroundColor: 'rgba(12, 30, 62, 0.7)'
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: teaIndustryData.varietyOutputValue.map(item => item.name),
    axisLine: { lineStyle: { color: '#42DEFF' } },
    axisLabel: { color: '#fff' }
  },
  yAxis: {
    type: 'value',
    name: '亿元',
    nameTextStyle: { color: '#fff' },
    axisLine: { lineStyle: { color: '#42DEFF' } },
    axisLabel: { color: '#fff' },
    splitLine: { lineStyle: { color: 'rgba(66, 222, 255, 0.1)' } }
  },
  series: [{
    data: teaIndustryData.varietyOutputValue.map(item => item.value),
    type: 'bar',
    barWidth: '60%',
    itemStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: '#00C48C' },
        { offset: 1, color: '#008FFB' }
      ])
    },
    label: {
      show: true,
      position: 'top',
      color: '#fff',
      formatter: '{c} 亿元'
    }
  }]
};

export function P2() {
  return (
    <Block title={'茶叶产业发展数据'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col ">
        {/* 顶部数据卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* 茶叶种植总面积卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">茶叶种植总面积</div>
            <div className="text-2xl font-bold text-white mb-1">{teaIndustryData.totalArea}万亩</div>
            <div className="text-[#00C48C] text-sm">↑ {teaIndustryData.growthRate}% 同比增长</div>
          </div>

          {/* 年产量及产值卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">年产量及产值</div>
            <div className="text-2xl font-bold text-white mb-1">{teaIndustryData.annualOutput}万吨</div>
            <div className="text-white">产值: {teaIndustryData.outputValue}亿元</div>
          </div>
        </div>

        {/* 品种面积卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {teaIndustryData.varieties.map((variety, index) => (
            <div key={index} className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
              <div className="text-[#42DEFF] text-sm mb-1">{variety.name}</div>
              <div className="text-2xl font-bold text-white">{variety.area}万亩</div>
            </div>
          ))}
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
          {/* 饼图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">各乡镇茶叶产量占比</div>
            <div className="flex-grow relative">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={pieOption}
              />
              {/* 图例 */}
              <div className="absolute bottom-2 left-0 right-0 flex flex-wrap justify-center gap-2 text-xs text-white">
                {teaIndustryData.townDistribution.map((town, index) => (
                  <div key={index} className="flex items-center mr-2 mb-1">
                    <span className="inline-block w-3 h-3 mr-1" style={{ backgroundColor: pieOption.color[index] }}></span>
                    {town.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 柱状图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">各茶叶品种产值对比</div>
            <div className="flex-grow">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={barOption}
              />
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
}