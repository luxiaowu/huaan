import { Block } from "../../components/block";
import { Chart } from "../../components/charts";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';
import { useState } from "react";

const P2 = () => {
  // 标签切换状态管理
  const [activeTab, setActiveTab] = useState<'activity' | 'training'>('activity');

  // 电商活动数据
  const activityData = {
    total: 48,
    monthly: 5,
    participants: 1256,
    chartData: [
      { month: '3月', count: 6 },
      { month: '4月', count: 8 },
      { month: '5月', count: 7 },
      { month: '6月', count: 9 },
      { month: '7月', count: 8 },
      { month: '8月', count: 10 },
    ],
    recentActivities: [
      {
        name: '华农茶叶专场直播',
        date: '2023-08-15',
        participants: 56,
        sales: 32500
      },
      {
        name: '乡村特产电商节',
        date: '2023-08-05',
        participants: 82,
        sales: 58300
      },
      {
        name: '电商助农推广活动',
        date: '2023-07-28',
        participants: 45,
        sales: 26800
      }
    ]
  };

  // 孵化培训数据
  const trainingData = {
    total: 32,
    monthly: 3,
    participants: 326,
    chartData: [
      { month: '3月', count: 4 },
      { month: '4月', count: 5 },
      { month: '5月', count: 4 },
      { month: '6月', count: 6 },
      { month: '7月', count: 7 },
      { month: '8月', count: 6 },
    ],
    recentActivities: [
      {
        name: '电商运营基础培训',
        date: '2023-08-10',
        participants: 32,
        sales: 0
      },
      {
        name: '直播带货技巧培训',
        date: '2023-08-02',
        participants: 45,
        sales: 0
      },
      {
        name: '农产品包装设计培训',
        date: '2023-07-25',
        participants: 28,
        sales: 0
      }
    ]
  };

  // 当前显示的数据
  const currentData = activeTab === 'activity' ? activityData : trainingData;

  // 图表配置
  const chartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: currentData.chartData.map(item => item.month),
      axisLine: {
        lineStyle: {
          color: '#8392A5'
        }
      },
      axisLabel: {
        color: '#8392A5'
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: '#8392A5'
        }
      },
      axisLabel: {
        color: '#8392A5'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(131, 146, 165, 0.1)'
        }
      }
    },
    series: [
      {
        name: activeTab === 'activity' ? '活动场次' : '培训场次',
        type: 'bar',
        data: currentData.chartData.map(item => item.count),
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#42DEFF' },
            { offset: 1, color: '#0073D6' }
          ])
        },
        barWidth: '60%'
      }
    ]
  };

  return (
    <Block title={'电商活动与孵化培训成效'}>
      <div className="p-4 h-full flex flex-col">
        {/* 标签切换 */}
        <div className="flex mb-6 border-b border-[#0073D6]">
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'activity'
                ? 'text-[#42DEFF] border-b-2 border-[#42DEFF]'
                : 'text-[#8392A5] hover:text-white'
            }`}
            onClick={() => setActiveTab('activity')}
          >
            电商活动
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
              activeTab === 'training'
                ? 'text-[#42DEFF] border-b-2 border-[#42DEFF]'
                : 'text-[#8392A5] hover:text-white'
            }`}
            onClick={() => setActiveTab('training')}
          >
            孵化培训
          </button>
        </div>

        {/* 统计卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">
              {activeTab === 'activity' ? '累计活动' : '累计培训'}
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {currentData.total}{activeTab === 'activity' ? '场' : '期'}
            </div>
            <div className="text-[#42DEFF] text-xs">
              {activeTab === 'activity' ? '本月新增: ' : '本月新增: '}
              {currentData.monthly}{activeTab === 'activity' ? '场' : '期'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">本月新增</div>
            <div className="text-3xl font-bold text-white mb-1">
              {currentData.monthly}{activeTab === 'activity' ? '场' : '期'}
            </div>
            <div className="text-[#42DEFF] text-xs">
              {activeTab === 'activity' ? '较上月 ↑12%' : '较上月 ↑8%'}
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">
              {activeTab === 'activity' ? '参与人次' : '累计培训户数'}
            </div>
            <div className="text-3xl font-bold text-white mb-1">
              {activeTab === 'activity' ? currentData.participants : currentData.participants}
              {activeTab === 'activity' ? '人' : '家'}
            </div>
            <div className="text-[#42DEFF] text-xs">
              {activeTab === 'activity' ? '平均每场26人' : '较上月 ↑5%'}
            </div>
          </div>
        </div>

        {/* 近6个月对比图表 */}
        <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6] mb-6">
          <div className="text-[#42DEFF] text-sm mb-3">
            近6个月{activeTab === 'activity' ? '活动' : '培训'}{activeTab === 'activity' ? '场次' : '期数'}对比
          </div>
          <Chart
            className="w-full h-[250px]"
            option={chartOption}
          />
        </div>

        {/* 最近3场活动/培训 */}
        <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6] flex-grow">
          <div className="text-[#42DEFF] text-sm mb-3">
            最近{activeTab === 'activity' ? '3场活动' : '3期培训'}
          </div>
          <div className="space-y-3">
            {currentData.recentActivities.map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-[#002C93] to-[#001E6C] rounded p-3 border border-[#0073D6]/30 hover:border-[#42DEFF]/50 transition-all duration-200 cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="font-medium text-white">{item.name}</div>
                  <div className="text-[#8392A5] text-xs">{item.date}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div className="text-[#42DEFF]">
                    参与{activeTab === 'activity' ? '人数' : '户数'}: {item.participants}
                  </div>
                  {activeTab === 'activity' && (
                    <div className="text-[#42DEFF]">销售额: ¥{item.sales.toLocaleString()}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Block>
  );
};

export default P2;