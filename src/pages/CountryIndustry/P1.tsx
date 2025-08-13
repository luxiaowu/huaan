import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Block } from '../../components/block';
import { Chart } from '../../components/charts';
import screenTownData from '../../components/screen_town.json';

// 主数据
export function P1() {
  // 参考图片中的数据
  const gdpData = {
    total: 86.5,
    growth: 7.2,
    primary: 27.7,
    secondary: 32.9,
    tertiary: 25.9,
    industryRatio: [32, 38, 30],
    years: ['2019', '2020', '2021', '2022', '2023'],
    yearGdp: [75, 78, 82, 84, 86.5]
  };

  // 处理乡镇数据，按GDP排序
  const townData = [...screenTownData]
    .sort((a, b) => (b.resv || 0) - (a.resv || 0))
    .slice(0, 6); // 取前6个乡镇

  // 饼图配置
  const pieOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
      textStyle: { color: '#fff' }
    },
    color: ['#00C48C', '#008FFB', '#FEB019'],
    series: [{
      name: '产业占比',
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
      data: [
        { value: gdpData.industryRatio[0], name: '第一产业' },
        { value: gdpData.industryRatio[1], name: '第二产业' },
        { value: gdpData.industryRatio[2], name: '第三产业' }
      ]
    }]
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
      data: gdpData.years,
      axisLine: { lineStyle: { color: '#42DEFF' } },
      axisLabel: { color: '#fff' }
    },
    yAxis: {
      type: 'value',
      axisLine: { lineStyle: { color: '#42DEFF' } },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(66, 222, 255, 0.1)' } }
    },
    series: [{
      data: gdpData.yearGdp,
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
      type: 'value',
      axisLine: { lineStyle: { color: '#42DEFF' } },
      axisLabel: { color: '#fff' },
      splitLine: { lineStyle: { color: 'rgba(66, 222, 255, 0.1)' } }
    },
    yAxis: {
      type: 'category',
      data: townData.map(item => item.name),
      axisLine: { lineStyle: { color: '#42DEFF' } },
      axisLabel: { color: '#fff' }
    },
    series: [{
      data: townData.map(item => item.resv),
      type: 'bar',
      barWidth: '40%',
      itemStyle: {
        color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
          { offset: 0, color: '#008FFB' },
          { offset: 1, color: '#00C48C' }
        ])
      },
      label: {
        show: true,
        position: 'right',
        color: '#fff'
      }
    }]
  };

  return (
    <Block title={'县乡两级产业经济指标'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col ">
        {/* 顶部数据卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* 总GDP卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">全县生产总值(GDP)</div>
            <div className="text-2xl font-bold text-white mb-1">{gdpData.total}亿元</div>
            <div className="text-[#00C48C] text-sm">↑ {gdpData.growth}% 同比增长</div>
          </div>

          {/* 三次产业占比卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">三次产业占比</div>
            <div className="flex justify-between items-center mb-1">
              <div className="text-2xl font-bold text-white">{gdpData.industryRatio[0]}%</div>
              <div className="text-2xl font-bold text-white">{gdpData.industryRatio[1]}%</div>
              <div className="text-2xl font-bold text-white">{gdpData.industryRatio[2]}%</div>
            </div>
            <div className="flex justify-between text-xs text-gray-400">
              <div>第一产业</div>
              <div>第二产业</div>
              <div>第三产业</div>
            </div>
          </div>
        </div>

        {/* 第二行数据卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* 第一产业卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">第一产业</div>
            <div className="text-2xl font-bold text-white">{gdpData.primary}亿元</div>
          </div>

          {/* 第二产业卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">第二产业</div>
            <div className="text-2xl font-bold text-white">{gdpData.secondary}亿元</div>
          </div>

          {/* 第三产业卡片 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-1">第三产业</div>
            <div className="text-2xl font-bold text-white">{gdpData.tertiary}亿元</div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow">
          {/* 饼图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">三次产业结构比</div>
            <div className="flex-grow relative">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={pieOption}
              />
              {/* 图例 */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-4 text-sm text-white">
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#00C48C] mr-1"></span>第一产业
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#008FFB] mr-1"></span>第二产业
                </div>
                <div className="flex items-center">
                  <span className="inline-block w-3 h-3 bg-[#FEB019] mr-1"></span>第三产业
                </div>
              </div>
            </div>
          </div>

          {/* 折线图区域 */}
          <div className="bg-[#0A2463] rounded-lg p-4 flex flex-col">
            <div className="text-[#42DEFF] text-sm mb-3">近5年全县生产总值</div>
            <div className="flex-grow">
              <Chart
                style={{ width: '100%', height: '100%' }}
                option={lineOption}
              />
            </div>
          </div>
        </div>

        {/* 柱状图区域 */}
        <div className="mt-4 bg-[#0A2463] rounded-lg p-4 flex flex-col">
          <div className="text-[#42DEFF] text-sm mb-3">各乡镇生产总值排名</div>
          <div className="flex-grow">
            <Chart
              style={{ width: '100%', height: '100%' }}
              option={barOption}
            />
          </div>
        </div>
      </div>
    </Block>
  );
}