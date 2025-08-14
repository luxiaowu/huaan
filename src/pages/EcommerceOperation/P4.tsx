import { Block } from "../../components/block";
import { Chart } from "../../components/charts";
import * as echarts from 'echarts';
import type {EChartsOption} from 'echarts';

const P4 = () => {
  // 渠道销售占比图表配置
  const salesChannelOption: EChartsOption = {
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
        name: '销售占比',
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
          { value: 55, name: '抖音直播', itemStyle: { color: '#42DEFF' } },
          { value: 30, name: '微信小店', itemStyle: { color: '#00B42A' } },
          { value: 15, name: '快手', itemStyle: { color: '#FF7D00' } }
        ]
      }
    ]
  };

  // 渠道点击占比图表配置
  const clickChannelOption: EChartsOption = {
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
        name: '点击占比',
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
          { value: 60, name: '抖音商城', itemStyle: { color: '#42DEFF' } },
          { value: 25, name: '微信小店', itemStyle: { color: '#00B42A' } },
          { value: 15, name: '快手', itemStyle: { color: '#FF7D00' } }
        ]
      }
    ]
  };

  // TOP5热销产品图表配置
  const hotProductsOption: EChartsOption = {
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
        data: ['土鸡蛋', '手工编织', '农家蜂蜜', '高山云雾茶', '花丝银饰'],
        axisLine: {
          lineStyle: { color: '#42DEFF' }
        },
        axisLabel: {
          color: '#fff',
          rotate: 30
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
          color: '#fff'
        },
        splitLine: {
          lineStyle: { color: 'rgba(66, 222, 255, 0.1)' }
        }
      }
    ],
    series: [
      {
        name: '销量',
        type: 'bar',
        barWidth: '60%',
        data: [1560, 1280, 1050, 920, 850],
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#42DEFF' },
            { offset: 1, color: '#0073D6' }
          ])
        }
      }
    ]
  };

  return (
    <Block title={'销售渠道与热销产品分析'}>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
        {/* 左侧渠道销售占比 */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg h-[300px]">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-2">渠道销售占比</h3>
          <Chart option={salesChannelOption} className="w-full h-[250px]" />
        </div>

        {/* 右侧渠道点击占比 */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg h-[300px]">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-2">渠道点击占比</h3>
          <Chart option={clickChannelOption} className="w-full h-[250px]" />
        </div>

        {/* TOP5热销产品 */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg h-[350px] md:col-span-2">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-2">TOP5热销产品</h3>
          <Chart option={hotProductsOption} className="w-full h-[300px]" />
        </div>

        {/* 产品类型占比说明 */}
        <div className="bg-[#0F1E3E] p-4 rounded-lg h-[120px] md:col-span-2">
          <h3 className="text-[#42DEFF] text-lg font-medium mb-2">产品类型占比</h3>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#42DEFF] rounded-full mr-2"></div>
              <span className="text-white">农产品 (65%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#00B42A] rounded-full mr-2"></div>
              <span className="text-white">手工艺品 (20%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#FF7D00] rounded-full mr-2"></div>
              <span className="text-white">文创产品 (10%)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-[#8F44AD] rounded-full mr-2"></div>
              <span className="text-white">其他产品 (5%)</span>
            </div>
          </div>
        </div>
      </div>
    </Block>
  );
};

export default P4;
