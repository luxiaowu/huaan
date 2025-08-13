import { useEffect, useRef, useState } from 'react';
import * as echarts from 'echarts';
import { Block } from '../../components/block';
import { Chart  } from '../../components/charts';

// 主数据
export function P4() {
  const [chartOption1, setChartOption1] = useState<any>({});
  const [chartOption2, setChartOption2] = useState<any>({});

  // 初始化图表数据
  useEffect(() => {
    // 第一个图表：菱形图 - 增长率和可持续性
    const option1: any = {
      backgroundColor: 'transparent',
      tooltip: {},
      radar: {
        indicator: [
          { name: '增长率', max: 100 },
          { name: '可持续性', max: 100 }
        ],
        splitArea: { show: true, areaStyle: { color: ['rgba(255,255,255,0.05)'] } },
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        name: { textStyle: { color: '#fff' } }
      },
      series: [{
        type: 'radar',
        data: [{
          value: [85, 90],
          name: '指标',
          symbol: 'circle',
          symbolSize: 6,
          lineStyle: { width: 2, color: '#00C6FF' },
          areaStyle: { color: 'rgba(0, 198, 255, 0.2)' }
        }]
      }]
    };

    // 第二个图表：柱状图 - 各乡镇产值排名
    const option2: any = {
      backgroundColor: 'transparent',
      tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
      grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
      xAxis: [{
        type: 'category',
        data: ['沙溪镇', '茅山街', '华阳镇', '新丰镇', '仙鹤镇'],
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        axisLabel: { color: '#fff', rotate: 30 }
      }],
      yAxis: [{
        type: 'value',
        axisLine: { lineStyle: { color: 'rgba(255,255,255,0.2)' } },
        splitLine: { lineStyle: { color: 'rgba(255,255,255,0.1)' } },
        axisLabel: { color: '#fff' }
      }],
      series: [{
        name: '产值',
        type: 'bar',
        barWidth: '60%',
        data: [3.2, 2.8, 2.5, 1.9, 1.5],
        itemStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#00C6FF' },
          { offset: 1, color: '#0072FF' }
        ]) }
      }]
    };

    setChartOption1(option1);
    setChartOption2(option2);
  }, []);

  return (
    <Block title={'林下经济产业发展数据'}>
      <div className="bg-[#0C1E3E] rounded-lg p-4 h-full flex flex-col space-y-4">
        {/* 顶部数据卡片 */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-1">林下经济种植总面积</h3>
            <p className="text-2xl font-bold text-white">6.2万亩</p>
            <p className="text-xs text-green-400">↑8.7% 同比增长</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-1">年产量及产值</h3>
            <p className="text-2xl font-bold text-white">3.8万吨</p>
            <p className="text-xs text-blue-400">产值：5.6亿元</p>
          </div>
        </div>

        {/* 中间分类数据 */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="bg-[#0F2B57] rounded-lg p-4 text-center">
            <h3 className="text-sm text-blue-300 mb-1">林下药材</h3>
            <p className="text-xl font-bold text-white">2.1万亩</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 text-center">
            <h3 className="text-sm text-blue-300 mb-1">食用菌</h3>
            <p className="text-xl font-bold text-white">1.8万亩</p>
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4 text-center">
            <h3 className="text-sm text-blue-300 mb-1">林下养殖</h3>
            <p className="text-xl font-bold text-white">2.3万亩</p>
          </div>
        </div>

        {/* 图表区域 */}
        <div className="grid grid-cols-2 gap-4 h-64">
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-2">主要林下经济作物效益对比</h3>
            <Chart option={chartOption1} className="w-full h-48" />
          </div>
          <div className="bg-[#0F2B57] rounded-lg p-4">
            <h3 className="text-sm text-blue-300 mb-2">各乡镇林下经济产值排名</h3>
            <Chart option={chartOption2} className="w-full h-48" />
          </div>
        </div>
      </div>
    </Block>
  );
}