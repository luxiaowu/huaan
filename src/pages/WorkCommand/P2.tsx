import { useState } from 'react';
import { Block } from '../../components/block';
import { Chart } from '../../components/charts';

export function P2() {
  // 切换状态：true 表示显示乡镇数据，false 表示显示村庄数据
  const [showTown, setShowTown] = useState(true);

  // 定义乡镇和村庄数据
  const townData = [
    { name: '瑞洪镇', value: 86 },
    { name: '高安市', value: 78 },
    { name: '沙洲镇', value: 65 },
    { name: '华林镇', value: 52 }
  ];

  const villageData = [
    { name: '东村', value: 45 },
    { name: '西村', value: 38 },
    { name: '南村', value: 32 },
    { name: '北村', value: 28 },
    { name: '中村', value: 22 }
  ];

  // 获取当前显示的数据
  const currentData = showTown ? townData : villageData;

  // 图表配置 - 横向柱状图
  const barChartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { type: 'shadow' },
      backgroundColor: 'rgba(0,0,0,0.7)',
      borderColor: '#0073D6',
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      axisLabel: { color: '#fff' },
      axisLine: {
        lineStyle: { color: '#1E3A6F' }
      },
      splitLine: {
        lineStyle: { color: 'rgba(30,58,111,0.3)' }
      }
    },
    yAxis: {
      type: 'category',
      data: currentData.map(item => item.name),
      axisLabel: {
        color: '#fff',
        interval: 0
      },
      axisLine: {
        lineStyle: { color: '#1E3A6F' }
      }
    },
    series: [{
      name: '公示数量',
      type: 'bar',
      barWidth: '60%',
      data: currentData.map(item => item.value),
      itemStyle: {
        color: '#42DEFF'
      },
      label: {
        show: true,
        position: 'right',
        color: '#fff',
        fontSize: 12
      },
      emphasis: {
        itemStyle: {
          color: '#5DEBFF'
        }
      }
    }]
  };

  // 群众查阅TOP公示信息数据
  const topPublicInfo = [
    { title: '2023年乡村医疗补助政策', views: 12584 },
    { title: '华安县城南片区规划公示', views: 9752 },
    { title: '2023年度农村危房改造实施方案', views: 8321 },
    { title: '关于调整城乡居民基本医疗保险缴费标准的通知', views: 7654 },
    { title: '2023年秋季中小学招生工作方案', views: 6987 },
    { title: '农村饮水安全巩固提升工程实施方案', views: 5432 },
    { title: '关于加强农村宅基地管理的实施意见', views: 4876 }
  ];

  return (
    <Block title={'政务信息公示公开统计'} className="bg-[#0F1C3F] text-white h-full w-full px-4 py-2">
      {/* 顶部统计卡片 */}
      <div className="grid grid-cols-3 gap-2 mb-3 h-[100px]">
        {/* 本月公示数 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">本月公示数</div>
          <div className="text-2xl font-bold text-[#42DEFF] mt-1">156</div>
        </div>

        {/* 同比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">同比</div>
          <div className="text-2xl font-bold text-[#36CFC9] mt-1">+8.2%</div>
        </div>

        {/* 环比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">环比</div>
          <div className="text-2xl font-bold text-[#36CFC9] mt-1">+3.5%</div>
        </div>
      </div>

      {/* 群众查阅TOP公示信息 */}
      <div className="bg-[#152950] rounded-lg p-3 mb-3 h-[160px]">
        <div className="text-[#86909C] text-sm mb-2">群众查阅TOP公示信息</div>
        <div className="overflow-y-auto h-[calc(100%-24px)] pr-2">
          {topPublicInfo.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-2 border-b border-[#1E3A6F]">
              <div className="text-white truncate max-w-[calc(100%-100px)]">
                {index + 1}. {item.title}
              </div>
              <div className="text-[#36CFC9] font-medium">{item.views.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 各乡镇公示公开数量排行 */}
      <div className="bg-[#152950] rounded-lg p-3 h-[calc(100%-268px)]">
        <div className="flex justify-between items-center mb-2">
          <div className="text-[#86909C] text-sm">各乡镇公示公开数量排行</div>
          <div className="flex space-x-1">
            <button
              onClick={() => setShowTown(true)}
              className={`px-3 py-1 text-xs rounded ${showTown ? 'bg-[#0073D6] text-white' : 'bg-[#1E3A6F] text-[#86909C]'}`}
            >
              乡镇
            </button>
            <button
              onClick={() => setShowTown(false)}
              className={`px-3 py-1 text-xs rounded ${!showTown ? 'bg-[#0073D6] text-white' : 'bg-[#1E3A6F] text-[#86909C]'}`}
            >
              村庄
            </button>
          </div>
        </div>
        <div className="h-[calc(100%-24px)] w-full">
          <Chart option={barChartOption} />
        </div>
      </div>
    </Block>
  );
}