import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Block } from '../../components/block';

export function P3() {
  // 引用图表容器
  const radarChartRef = useRef<HTMLDivElement>(null);
  const barChartRef = useRef<HTMLDivElement>(null);

  // 初始化雷达图 - 政策文件分类占比
  useEffect(() => {
    if (radarChartRef.current) {
      const radarChart = echarts.init(radarChartRef.current);
      radarChart.setOption({
        tooltip: {},
        radar: {
          indicator: [
            { name: '教育', max: 100 },
            { name: '文旅', max: 100 },
            { name: '基建', max: 100 },
            { name: '医疗', max: 100 },
            { name: '农业', max: 100 }
          ],
          splitArea: {
            areaStyle: {
              color: ['rgba(66, 222, 255, 0.05)', 'rgba(66, 222, 255, 0.1)']
            }
          },
          axisLine: {
            lineStyle: {
              color: 'rgba(66, 222, 255, 0.5)'
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(66, 222, 255, 0.5)'
            }
          },
          name: {
            textStyle: {
              color: '#fff'
            }
          }
        },
        series: [{
          name: '政策分类占比',
          type: 'radar',
          data: [{
            value: [65, 45, 70, 60, 80],
            name: '占比',
            lineStyle: {
              color: '#42DEFF'
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: 'rgba(66, 222, 255, 0.5)' },
                { offset: 1, color: 'rgba(66, 222, 255, 0.1)' }
              ])
            }
          }]
        }]
      });

      // 响应窗口大小变化
      const resizeHandler = () => radarChart.resize();
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  // 初始化柱状图 - 政策传播效果排名
  useEffect(() => {
    if (barChartRef.current) {
      const barChart = echarts.init(barChartRef.current);
      barChart.setOption({
        tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
        grid: { left: '3%', right: '4%', bottom: '8%', containLabel: true },
        xAxis: {
          type: 'category',
          data: ['乡村振兴', '农业补贴', '医疗保障', '教育服务', '养老服务'],
          axisLabel: { color: '#fff', interval: 0, rotate: 30 }
        },
        yAxis: { type: 'value', axisLabel: { color: '#fff' } },
        series: [{
          name: '传播效果',
          type: 'bar',
          barWidth: '60%',
          data: [85, 72, 65, 58, 45],
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#36CFC9' },
              { offset: 1, color: '#1570A5' }
            ])
          },
          label: {
            show: true,
            position: 'top',
            color: '#fff'
          }
        }]
      });

      // 响应窗口大小变化
      const resizeHandler = () => barChart.resize();
      window.addEventListener('resize', resizeHandler);
      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, []);

  // 政策文件查阅TOP3数据
  const topPolicyFiles = [
    { title: '华安乡村振兴战略实施意见', views: 24587 },
    { title: '2023年农业补贴政策', views: 19752 },
    { title: '农村医疗保障制度实施细则', views: 16421 }
  ];

  return (
    <Block title={'新闻政策发布与传播分析'} className="bg-[#0F1C3F] text-white h-full w-full p-2">
      {/* 顶部统计卡片 */}
      <div className="grid grid-cols-2 gap-2 mb-3 h-[100px]">
        {/* 政策文件总数 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">政策文件总数</div>
          <div className="text-3xl font-bold text-[#42DEFF] mt-1">328</div>
        </div>

        {/* 新闻资讯阅读量 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col justify-between">
          <div className="text-[#86909C] text-sm">新闻资讯阅读量</div>
          <div className="text-3xl font-bold text-[#42DEFF] mt-1">156.3万</div>
        </div>
      </div>

      {/* 政策文件查阅TOP3 */}
      <div className="bg-[#152950] rounded-lg p-3 mb-3 h-[140px]">
        <div className="text-[#86909C] text-sm mb-2">政策文件查阅TOP3</div>
        <div className="space-y-3">
          {topPolicyFiles.map((item, index) => (
            <div key={index} className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-[#0073D6] flex items-center justify-center text-white text-xs font-bold mr-2">
                  {index + 1}
                </div>
                <div className="text-white">{item.title}</div>
              </div>
              <div className="text-[#36CFC9] font-medium">{item.views.toLocaleString()}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 政策文件分类占比和政策传播效果排名 */}
      <div className="grid grid-cols-2 gap-2 h-[calc(100%-244px)]">
        {/* 政策文件分类占比 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col">
          <div className="text-[#86909C] text-sm mb-2">政策文件分类占比</div>
          <div ref={radarChartRef} className="flex-grow w-full"></div>
        </div>

        {/* 政策传播效果排名 */}
        <div className="bg-[#152950] rounded-lg p-3 flex flex-col">
          <div className="text-[#86909C] text-sm mb-2">政策传播效果排名</div>
          <div ref={barChartRef} className="flex-grow w-full"></div>
        </div>
      </div>
    </Block>
  );
}