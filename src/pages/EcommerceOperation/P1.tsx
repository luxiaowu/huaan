import { Block } from "../../components/block";
import { Chart } from "../../components/charts";
import * as echarts from 'echarts';
import type { EChartsOption } from "echarts";

const P1 = () => {
  // 生成近30天的日期数据
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 30; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(today.getDate() - i);
      dates.push(`${date.getDate()}日`);
    }
    return dates;
  };

  // 生成随机销售额数据，模拟波动上升趋势
  const generateSalesData = () => {
    const data = [];
    let base = 7000;
    for (let i = 0; i < 31; i++) {
      // 整体上升趋势
      base += Math.random() * 300 - 100;
      // 添加随机波动
      const value = base + Math.random() * 1500 - 750;
      data.push(Math.round(value));
    }
    return data;
  };

  // 近30天每日销售额趋势图表配置
  const salesTrendOption: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(66, 222, 255, 0.3)'
        }
      },
      formatter: '{b}: ¥{c}'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      data: generateDates(),
      axisLine: {
        lineStyle: {
          color: '#8392A5'
        }
      },
      axisLabel: {
        color: '#8392A5',
        interval: 2 // 每隔2天显示一个标签，避免拥挤
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
        color: '#8392A5',
        formatter: '¥{value}'
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(131, 146, 165, 0.1)'
        }
      }
    },
    series: [
      {
        name: '销售额',
        type: 'line',
        data: generateSalesData(),
        smooth: true,
        lineStyle: {
          color: '#42DEFF',
          width: 2
        },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(66, 222, 255, 0.3)' },
            { offset: 1, color: 'rgba(66, 222, 255, 0.05)' }
          ])
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: {
          color: '#42DEFF',
          borderColor: '#0073D6',
          borderWidth: 2
        },
        emphasis: {
          itemStyle: {
            symbolSize: 8
          }
        }
      }
    ]
  };

  return (
    <Block title={'电商运营数据统计'}>
      <div className="p-4 h-full flex flex-col">
       {/* 统计卡片区域 */}
        <div className="space-y-2 mb-2">
          {/* 累计订单总量和累计销售总额 - 同一行 */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
              <div className="text-[#8392A5] text-sm mb-1">累计订单总量</div>
              <div className="text-xl font-bold text-white mb-1">18,654单</div>
              <div className="text-[#42DEFF] text-xs">本月新增: 1,258单 ↑15.2%</div>
            </div>
            <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
              <div className="text-[#8392A5] text-sm mb-1">累计销售总额</div>
              <div className="text-xl font-bold text-white mb-1">¥2,856,320</div>
              <div className="text-[#42DEFF] text-xs">本月销售: ¥256,890</div>
            </div>
          </div>
          
          {/* 近一月销售额 - 单独一行 */}
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">近一月销售额</div>
            <div className="text-xl font-bold text-white mb-1">¥256,890</div>
            <div className="text-[#42DEFF] text-xs">同比增长: ↑23.5% &nbsp;&nbsp;环比增长: ↑8.2%</div>
          </div>
          
          {/* 活跃店铺数 - 单独一行 */}
          <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6]">
            <div className="text-[#8392A5] text-sm mb-1">活跃店铺数</div>
            <div className="text-xl font-bold text-white mb-1">128家</div>
            <div className="text-[#42DEFF] text-xs">↑12家较上月</div>
          </div>
        </div>

        {/* 近30天每日销售额趋势图表 */}
        <div className="bg-gradient-to-br from-[#001E6C] to-[#003B9D] rounded-lg p-4 border border-[#0073D6] flex-grow">
          <div className="text-[#42DEFF] text-sm mb-3">近30天每日销售额趋势</div>
          <Chart
            className="w-full h-[300px]"
            option={salesTrendOption}
          />
        </div>
      </div>
    </Block>
  );
};

export default P1;