import { Block } from "../../components/block";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';
import { Chart } from "../../components/charts";

const P4 = () => {
  // 服务查询次数排行TOP10图表配置
  const serviceRankingOption: EChartsOption = {
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
    yAxis: {
      type: 'category',
      data: ['婚姻登记', '公积金', '技能培训', '就业信息', '教育资源', '养老服务', '医疗保障', '社保查询', '税务申报', '法律咨询'],
      axisLine: {
        lineStyle: {
          color: '#8392A5'
        }
      },
      axisLabel: {
        color: '#8392A5'
      }
    },
    series: [
      {
        name: '查询次数',
        type: 'bar',
        data: [8542, 7321, 6258, 5731, 4982, 4325, 3876, 3542, 3125, 2876],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
            { offset: 0, color: '#42DEFF' },
            { offset: 1, color: '#0073D6' }
          ])
        },
        barWidth: '60%'
      }
    ]
  };

  return (
    <Block title={'办事大厅服务资源关注度分析'}>
      <div className="p-4 h-full flex flex-col">
        {/* 统计卡片区域 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">服务总数</div>
            <div className="text-3xl font-bold text-white mb-1">48项</div>
            <div className="text-[#42DEFF] text-xs"></div>
          </div>
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">总查询量</div>
            <div className="text-3xl font-bold text-white mb-1">32,568</div>
            <div className="text-[#42DEFF] text-xs"></div>
          </div>
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">在线办理率</div>
            <div className="text-3xl font-bold text-white mb-1">68.3%</div>
            <div className="text-[#42DEFF] text-xs"></div>
          </div>
        </div>

        {/* 服务查询次数排行图表 */}
        <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6] flex-grow">
          <div className="text-[#42DEFF] text-sm mb-3">服务查询次数排行TOP10</div>
          <Chart
            className="w-full h-[300px]"
            option={serviceRankingOption}
          />
        </div>
      </div>
    </Block>
  );
};

export default P4;