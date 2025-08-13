import { useState, useEffect } from 'react';
import { Block } from '../../components/block';
import { Chart, EChartsOption } from '../../components/charts';
import * as echarts from 'echarts';

const P1 = () => {
  const [registerTrendOption, setRegisterTrendOption] = useState<EChartsOption>({});
  const [userDistributionOption, setUserDistributionOption] = useState<EChartsOption>({});
  const [activityTrendOption, setActivityTrendOption] = useState<EChartsOption>({});

  // 初始化图表数据
  useEffect(() => {
    // 近6个月用户注册趋势图表
    const registerOption: EChartsOption = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: [{
        type: 'category',
        data: ['3月', '4月', '5月', '6月', '7月', '8月'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        axisLabel: { color: '#fff' }
      }],
      yAxis: [{
        type: 'value',
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#fff' }
      }],
      series: [{
        name: '注册用户',
        type: 'line',
        smooth: true,
        data: [23500, 24200, 25100, 26300, 27400, 28654],
        lineStyle: { width: 3, color: '#00C6FF' },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(0, 198, 255, 0.5)' },
            { offset: 1, color: 'rgba(0, 198, 255, 0)' }
          ])
        },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { color: '#00C6FF' }
      }]
    };

    // 各乡组用户占比饼图
    const distributionOption: EChartsOption = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'item' },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
        textStyle: { color: '#fff' }
      },
      series: [{
        name: '用户占比',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#0C1E3E',
          borderWidth: 2
        },
        label: { show: false },
        emphasis: { label: { show: true, fontSize: '16', fontWeight: 'bold', color: '#fff' } },
        labelLine: { show: false },
        data: [
          { value: 35, name: '华阳镇', itemStyle: { color: '#00C6FF' } },
          { value: 25, name: '沙溪镇', itemStyle: { color: '#0072FF' } },
          { value: 15, name: '茅山街', itemStyle: { color: '#67C23A' } },
          { value: 12, name: '新丰镇', itemStyle: { color: '#F56C6C' } },
          { value: 8, name: '仙鹤镇', itemStyle: { color: '#E6A23C' } },
          { value: 5, name: '其他', itemStyle: { color: '#909399' } }
        ]
      }]
    };

    // 用户活跃度趋势图
    const activityOption: EChartsOption = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis' },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: [{
        type: 'category',
        data: ['3月', '4月', '5月', '6月', '7月', '8月'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        axisLabel: { color: '#fff' }
      }],
      yAxis: [{
        type: 'value',
        min: 40,
        max: 60,
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: {
          color: '#fff',
          formatter: '{value}%'
        }
      }],
      series: [{
        name: '活跃度',
        type: 'line',
        data: [48.5, 49.2, 50.1, 51.3, 52.7, 53.3],
        lineStyle: { width: 3, color: '#67C23A' },
        symbol: 'circle',
        symbolSize: 6,
        itemStyle: { color: '#67C23A' }
      }]
    };

    setRegisterTrendOption(registerOption);
    setUserDistributionOption(distributionOption);
    setActivityTrendOption(activityOption);
  }, []);

  return (
    <Block title={'村民用户注册及活跃度统计'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col space-y-4">
        {/* 顶部数据卡片 */}
        <div className="grid grid-cols-5 gap-4 mb-4">
          <div className="bg-[#0F2B57] rounded-lg p-4 col-span-2">
            <h3 className="text-sm text-blue-300 mb-1">总注册用户数</h3>
            <p className="text-2xl font-bold text-white">28,654人</p>
            <p className="text-xs text-green-400">↑12.5% 同比增长</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 col-span-2">
            <h3 className="text-sm text-blue-300 mb-1">实名认证率</h3>
            <p className="text-2xl font-bold text-white">92.3%</p>
            <p className="text-xs text-green-400">↑3.8% 环比增长</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 col-span-1">
            <h3 className="text-sm text-blue-300 mb-1">月活跃用户</h3>
            <p className="text-2xl font-bold text-white">15,286</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 col-span-1">
            <h3 className="text-sm text-blue-300 mb-1">活跃率</h3>
            <p className="text-2xl font-bold text-white">53.3%</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 col-span-1">
            <h3 className="text-sm text-blue-300 mb-1">平均使用时长</h3>
            <p className="text-2xl font-bold text-white">23分钟</p>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-2 gap-4 h-64 mb-4">
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-2">近6个月用户注册趋势</h3>
            <Chart option={registerTrendOption} className="w-full h-48" />
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-2">各乡镇用户占比</h3>
            <Chart option={userDistributionOption} className="w-full h-48" />
          </div>
        </div>

        {/* 底部活跃度趋势图 */}
        <div className="bg-[#0F2B57] rounded-lg p-4 h-48">
          <h3 className="text-sm text-blue-300 mb-2">用户活跃度趋势</h3>
          <Chart option={activityTrendOption} className="w-full h-36" />
        </div>
      </div>
    </Block>
  );
}

export default P1