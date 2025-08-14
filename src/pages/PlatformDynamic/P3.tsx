import { Block } from "../../components/block";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';
import { Chart } from "../../components/charts";

const P3 = () => {
  // 趋势图数据
  const trendData = {
    days: ['1-10日', '11-20日', '21-30日'],
    posts: [1250, 1420, 1680],
    interactions: [5800, 6200, 7100],
  };

  // 饼图数据
  const pieData = [
    { name: '求助', value: 35, color: '#4CAF50' },
    { name: '分享', value: 25, color: '#2196F3' },
    { name: '建议', value: 20, color: '#FFC107' },
    { name: '投诉', value: 10, color: '#F44336' },
    { name: '其他', value: 10, color: '#9C27B0' },
  ];

  // 热门话题数据
  const hotTopics = [
    { id: 1, name: '乡村环境整治建议', participants: 1256 },
    { id: 2, name: '农产品销售渠道', participants: 987 },
    { id: 3, name: '乡村教育资源改善', participants: 854 },
    { id: 4, name: '农村医疗保障', participants: 763 },
    { id: 5, name: '乡村文化活动', participants: 629 },
  ];

  // 趋势图配置
  const trendChartOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      data: ['发帖数', '互动数'],
      textStyle: {
        color: '#94A3B8',
      },
      top: 0,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      top: '15%',
    },
    xAxis: {
      type: 'category',
      data: trendData.days,
      axisLabel: {
        color: '#94A3B8',
      },
      axisLine: {
        lineStyle: {
          color: '#3B82F6',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
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
    series: [
      {
        name: '发帖数',
        type: 'line',
        data: trendData.posts,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#42DEFF',
        },
        lineStyle: {
          width: 3,
          color: '#42DEFF',
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(66, 222, 255, 0.5)' },
            { offset: 1, color: 'rgba(66, 222, 255, 0.1)' },
          ]),
        },
      },
      {
        name: '互动数',
        type: 'line',
        data: trendData.interactions,
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: {
          color: '#00E5FF',
        },
        lineStyle: {
          width: 3,
          color: '#00E5FF',
          type: 'dashed',
        },
      },
    ],
  };

  // 饼图配置
  const pieChartOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
    },
    legend: {
      orient: 'vertical',
      right: 10,
      top: 'center',
      textStyle: {
        color: '#94A3B8',
      },
      formatter: function(name) {
        const item = pieData.find(item => item.name === name);
        return `${name}: ${item?.value}%`;
      },
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        center: ['40%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#0F172A',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '18',
            fontWeight: 'bold',
            color: '#FFFFFF',
          },
        },
        labelLine: {
          show: false,
        },
        data: pieData.map(item => ({
          name: item.name,
          value: item.value,
          itemStyle: {
            color: item.color,
          },
        })),
      },
    ],
  };

  return (
     <Block title={'村民发帖与互动统计'} className="w-full h-full p-2 bg-[#0F172A]">
        {/* 顶部指标卡 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6" style={{overflow: 'hidden'}}>
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-[#94A3B8] text-sm mb-1">累计发帖总数</div>
            <div className="text-xl font-bold text-white mb-1">15,872<span className="text-lg ml-1">条</span></div>
            <div className="text-green-400 text-sm flex items-center">
              <span className="mr-1">↑ 23.7%</span> 同比增长
            </div>
          </div>
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-[#94A3B8] text-sm mb-1">互动总量</div>
            <div className="text-xl font-bold text-white mb-1">86,325<span className="text-lg ml-1">次</span></div>
            <div className="text-[#94A3B8] text-sm">评论: 32,564 | 点赞: 53,761</div>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-6">
          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-white font-medium mb-2">近30天发帖与互动趋势</div>
            <div className="h-64 bg-[#0F172A] rounded p-2">
              <Chart option={trendChartOption} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
            <div className="text-white font-medium mb-2">帖子内容分类占比</div>
            <div className="h-64 bg-[#0F172A] rounded p-2">
              <Chart option={pieChartOption} style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>

        {/* 热门话题TOP5 */}
        <div className="bg-gradient-to-br from-[#1E3A8A] to-[#1E293B] rounded-lg p-2 shadow-lg border border-[#3B82F6]">
          <div className="text-white font-medium mb-2">热门话题TOP5</div>
          <div className="space-y-3">
            {hotTopics.map(topic => (
              <div key={topic.id} className="flex items-center justify-between p-2 bg-[#0F172A] rounded border border-[#3B82F6]">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-bold mr-3">{topic.id}</div>
                  <div className="text-white">{topic.name}</div>
                </div>
                <div className="text-[#42DEFF] flex items-center">
                  <span className="mr-1">参与:</span>{topic.participants}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Block>
  );
};

export default P3;