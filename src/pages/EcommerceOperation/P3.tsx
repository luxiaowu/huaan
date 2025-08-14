import { Block } from "../../components/block";
import { Chart } from "../../components/charts";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';

const P3 = () => {
  // Bar chart configuration for sales comparison of last 10 live streams
  const salesComparisonOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0, 30, 66, 0.7)',
      borderColor: '#0073D6',
      textStyle: { color: '#fff' }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        axisLine: {
          lineStyle: { color: '#42DEFF' }
        },
        axisLabel: {
          color: '#fff'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: { color: '#42DEFF' }
        },
        axisLabel: {
          color: '#fff',
          formatter: '¥{value}'
        },
        splitLine: {
          lineStyle: { color: 'rgba(66, 222, 255, 0.1)' }
        },
        // Set max value to eliminate empty space at the top
        max: 6000
      }
    ],
    series: [
      {
        name: 'Sales',
        type: 'bar',
        barWidth: '60%',
        data: [3200, 2800, 4500, 3800, 5200, 4800, 3600, 4200, 5100, 4600],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#42DEFF' },
            { offset: 1, color: '#0073D6' }
          ])
        }
      }
    ]
  };

  // Pie chart configuration for product category distribution
  const categoryDistributionOption: EChartsOption = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}: {c}%',
      backgroundColor: 'rgba(0, 30, 66, 0.7)',
      borderColor: '#0073D6',
      textStyle: { color: '#fff' }
    },
    legend: {
      bottom: '5%',
      left: 'center',
      textStyle: { color: '#42DEFF' }
    },
    series: [
      {
        name: 'Category Distribution',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#0F1E3E',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
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
          { value: 45, name: 'Agricultural Products', itemStyle: { color: '#42DEFF' } },
          { value: 25, name: 'Handicrafts', itemStyle: { color: '#00B42A' } },
          { value: 15, name: 'Cultural Products', itemStyle: { color: '#FF7D00' } },
          { value: 10, name: 'Local Specialties', itemStyle: { color: '#8F44AD' } },
          { value: 5, name: 'Others', itemStyle: { color: '#F53F3F' } }
        ]
      }
    ]
  };

  return (
    <Block title={'Live Streaming E-commerce Data Statistics'}>
      <div className="p-4 h-full flex flex-col">
        {/* Metric cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">累计直播场次</p>
            <p className="text-white text-2xl font-bold">126场</p>
          </div>
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">总观看次数</p>
            <p className="text-white text-2xl font-bold">8.56万</p>
          </div>
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">平均观看时长</p>
            <p className="text-white text-2xl font-bold">8.5 分钟</p>
          </div>
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">累计选品数量</p>
            <p className="text-white text-2xl font-bold">328款</p>
          </div>
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">热销选品数量</p>
            <p className="text-white text-2xl font-bold">45款</p>
          </div>
          <div className="bg-[#0F1E3E] p-4 rounded-lg flex flex-col items-center justify-center h-[100px]">
            <p className="text-[#42DEFF] text-sm mb-1">上架成功率</p>
            <p className="text-white text-2xl font-bold">92.6%</p>
          </div>
        </div>

        {/* Sales comparison chart */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg mb-6 flex-1 min-h-[300px]">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-4">近10场直播销售额对比</h3>

          <Chart option={salesComparisonOption} className="w-full h-[250px]" />
        </div>

        {/* Category distribution chart */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg flex-1 min-h-[300px]">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-4">不同品类选品的销售占比</h3>
          <Chart option={categoryDistributionOption} className="w-full h-[250px]" />
        </div>
      </div>
    </Block>
  );
};

export default P3;