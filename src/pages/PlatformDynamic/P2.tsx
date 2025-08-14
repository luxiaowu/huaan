import { Block } from "../../components/block";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';
import { Chart } from "../../components/charts";

const P2 = () => {
  // 乡村概况数据
  const overviewData = [
    { name: '乡村概况', value: 87.5, color: '#4CAF50' },
    { name: '特色信息', value: 76.3, color: '#2196F3' },
    { name: '公共资源', value: 82.1, color: '#FFC107' },
  ];

  // 各乡镇信息完善度数据
  const townData = [
    { name: '仙圩镇', value: 92 },
    { name: '新桥镇', value: 88 },
    { name: '以港镇', value: 78 },
    { name: '牛山镇', value: 85 },
  ];

  // 各类信息完善度对比数据
  const radarData = [
    { name: '特色资源', value: 76.3 },
    { name: '交通信息', value: 85.2 },
    { name: '教育资源', value: 79.5 },
    { name: '医疗资源', value: 81.7 },
    { name: '旅游信息', value: 72.9 },
    { name: '农业特产', value: 88.4 },
  ];

  // 条形图配置
  const barChartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
      formatter: '{b}: {c}%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
      max: 100,
      axisLabel: {
        formatter: '{value}%',
        color: '#94A3B8',
      },
      axisLine: {
        lineStyle: {
          color: '#3B82F6',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(59, 130, 246, 0.2)',
        },
      },
    },
    yAxis: {
      type: 'category',
      data: townData.map(item => item.name),
      axisLabel: {
        color: '#94A3B8',
      },
      axisLine: {
        lineStyle: {
          color: '#3B82F6',
        },
      },
    },
    series: [
      {
        type: 'bar',
        data: townData.map(item => item.value),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#0073D6' },
            { offset: 1, color: '#002C93' },
          ]),
          borderRadius: [0, 4, 4, 0],
        },
        label: {
          show: true,
          position: 'right',
          formatter: '{c}%',
          color: '#FFFFFF',
        },
        barWidth: '40%',
      },
    ],
  };

  // 雷达图配置
  const radarChartOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
    },
    radar: {
      indicator: radarData.map(item => ({
        name: item.name,
        max: 100,
      })),
      splitArea: {
        areaStyle: {
          color: ['rgba(59, 130, 246, 0.05)'],
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(59, 130, 246, 0.5)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(59, 130, 246, 0.5)',
        },
      },
      name: {
        textStyle: {
          color: '#94A3B8',
        },
      },
    },
    series: [
      {
        type: 'radar',
        data: [
          {
            value: radarData.map(item => item.value),
            name: '完善度',
            areaStyle: {
              color: 'rgba(66, 222, 255, 0.2)',
            },
            lineStyle: {
              color: '#42DEFF',
            },
            itemStyle: {
              color: '#42DEFF',
            },
          },
        ],
      },
    ],
  };

  return (
     <Block title={'乡村信息完整度评估'} className="w-full h-full p-4 bg-[#0F172A]">
        {/* 顶部指标卡 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {overviewData.map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-4 shadow-lg border border-[#3B82F6]">
              <div className="text-[#94A3B8] text-sm mb-1">{item.name}</div>
              <div className="text-3xl font-bold" style={{ color: item.color }}>{item.value}%</div>
            </div>
          ))}
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-white font-medium mb-4">各乡镇信息完善度</div>
            <div className="h-64 rounded p-2">
              <Chart option={barChartOption} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-white font-medium mb-4">各类信息完善度对比</div>
            <div className="h-64  rounded ">
              <Chart option={radarChartOption} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </Block>
  );
};

export default P2;