import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Block } from '../../components/block';
import { Chart } from '../../components/charts';

// 旅游产业数据
const tourismData = {
  scenicSpots: 28,
  aLevelSpots: 5,
  annualVisitors: 126.5,
  growthRate: 15.8,
  totalRevenue: 8.2,
  revenueGrowth: 18.3,
  satisfactionScore: 4.7,
  reviewCount: 12568,
  monthlyVisitors: [
    { month: '1月', value: 8.2 },
    { month: '2月', value: 10.5 },
    { month: '3月', value: 11.2 },
    { month: '4月', value: 12.8 },
    { month: '5月', value: 14.2 },
    { month: '6月', value: 11.5 },
    { month: '7月', value: 9.8 },
    { month: '8月', value: 10.2 },
    { month: '9月', value: 11.8 },
    { month: '10月', value: 15.2 },
    { month: '11月', value: 12.5 },
    { month: '12月', value: 9.8 },
  ],
  scenicSpotDistribution: [
    { name: '大地土楼群', value: 35 },
    { name: '官畲民俗村', value: 25 },
    { name: '林语堂文化区', value: 20 },
    { name: '平和县大水圳', value: 15 },
    { name: '其他景点', value: 5 },
  ],
  tourismRoutes: [
    { name: '茶文化体验线', visitors: 42.5 },
    { name: '生态休闲度假线', visitors: 38.2 },
    { name: '乡村民俗体验线', visitors: 26.8 },
  ],
};

// 折线图配置
const lineOption = {
  tooltip: {
    trigger: 'axis',
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
    data: tourismData.monthlyVisitors.map(item => item.month),
    axisLine: { lineStyle: { color: '#42DEFF' } },
    axisLabel: { color: '#fff' }
  },
  yAxis: {
    type: 'value',
    name: '万人次',
    nameTextStyle: { color: '#fff' },
    axisLine: { lineStyle: { color: '#42DEFF' } },
    axisLabel: { color: '#fff' },
    splitLine: { lineStyle: { color: 'rgba(66, 222, 255, 0.1)' } }
  },
  series: [{
    data: tourismData.monthlyVisitors.map(item => item.value),
    type: 'line',
    smooth: true,
    lineStyle: { width: 3, color: '#42DEFF' },
    symbol: 'circle',
    symbolSize: 8,
    itemStyle: { color: '#008FFB' },
    areaStyle: {
      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
        { offset: 0, color: 'rgba(66, 222, 255, 0.5)' },
        { offset: 1, color: 'rgba(66, 222, 255, 0.1)' }
      ])
    }
  }]
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
    name: '景点游客占比',
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
    data: tourismData.scenicSpotDistribution
  }]
};

export function P3() {
  return (
    <Block title={'文化旅游产业发展统计'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col ">
        {/* 顶部数据卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* 旅游景点数量卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">旅游景点数量</div>
            <div className="text-2xl font-bold text-white mb-1">{tourismData.scenicSpots}个</div>
            <div className="text-gray-400 text-sm">A级景区{tourismData.aLevelSpots}个</div>
          </div>

          {/* 年度接待游客量卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">年度接待游客量</div>
            <div className="text-2xl font-bold text-white mb-1">{tourismData.annualVisitors}万人次</div>
            <div className="text-[#00C48C] text-sm">↑ {tourismData.growthRate}% 同比增长</div>
          </div>
        </div>

        {/* 第二行数据卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* 文旅产业总收入卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">文旅产业总收入</div>
            <div className="text-2xl font-bold text-white mb-1">{tourismData.totalRevenue}亿元</div>
            <div className="text-[#00C48C] text-sm">↑ {tourismData.revenueGrowth}% 同比增长</div>
          </div>

          {/* 游客满意度评分卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">游客满意度评分</div>
            <div className="text-2xl font-bold text-white mb-1">{tourismData.satisfactionScore}/5.0</div>
            <div className="text-gray-400 text-sm">基于{tourismData.reviewCount.toLocaleString()}条评价</div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4 flex-grow">
          {/* 折线图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">近12个月游客量趋势</div>
            <div className="flex-grow">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={lineOption}
              />
            </div>
          </div>

          {/* 饼图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">各大景点游客占比</div>
            <div className="flex-grow relative">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={pieOption}
              />
              {/* 图例 */}
              <div className="absolute bottom-2 left-0 right-0 flex flex-wrap justify-center gap-2 text-xs text-white">
                {tourismData.scenicSpotDistribution.map((spot, index) => (
                  <div key={index} className="flex items-center mr-2 mb-1">
                    <span className="inline-block w-3 h-3 mr-1" style={{ backgroundColor: pieOption.color[index] }}></span>
                    {spot.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 主要旅游线路游客量区域 */}
        <div className="bg-[#0A2463] rounded-lg p-4">
          <div className="text-[#42DEFF] text-sm mb-3">主要旅游线路游客量</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tourismData.tourismRoutes.map((route, index) => (
              <div key={index} className="border border-[#42DEFF] rounded-lg p-4 flex flex-col items-center justify-center bg-[#0C1E3E]">
                <div className="text-white text-center mb-2">{route.name}</div>
                <div className="text-2xl font-bold text-[#42DEFF]">{route.visitors}万人次</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
}