import * as echarts from 'echarts';
import { Block } from '../../components/block';
import { Chart, type EChartsOption } from '../../components/charts';
import { useRef, useEffect } from 'react';

export function P4() {
    const chartRef = useRef<HTMLDivElement>(null);

    // 生产总值数据
    const gdpData = {
        year2023: [38, 70, 45],
        year2024: [42, 85, 50],
        industries: ['第一产业增加值', '第二产业增加值', '第三产业增加值'],
    };

    // 柱状图配置
    const barOption: EChartsOption = {
        title: {
            text: '华安县地区生产总值',
            left: 'center',
            textStyle: {
                color: '#42DEFF',
                fontSize: 18,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params: any) {
                return `${params[0].name}<br/>${params[0].seriesName}: ${params[0].value}亿元<br/>${params[1].seriesName}: ${params[1].value}亿元`;
            }
        },
        legend: {
            data: ['2024', '2023'],
            top: 30,
            textStyle: {
                color: '#8AB4D9',
                fontSize: 14
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: gdpData.industries,
            axisLine: {
                lineStyle: {
                    color: '#0072D5'
                }
            },
            axisLabel: {
                color: '#8AB4D9',
                fontSize: 12,
                rotate: 0
            },
            axisTick: {
                alignWithLabel: true
            }
        }],
        yAxis: [{
            type: 'value',
            name: '单位: 亿元',
            nameTextStyle: {
                color: '#8AB4D9',
                fontSize: 12,
                padding: [0, 0, 0, 40]
            },
            axisLine: {
                lineStyle: {
                    color: '#0072D5'
                }
            },
            axisLabel: {
                color: '#8AB4D9',
                fontSize: 12
            },
            splitLine: {
                lineStyle: {
                    color: 'rgba(0, 114, 213, 0.2)',
                    type: 'dashed'
                }
            },
            max: 100
        }],
        series: [
            {
                name: '2024',
                type: 'bar',
                barWidth: '30%',
                data: gdpData.year2024,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#00B8FF' },
                        { offset: 1, color: '#0072D5' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#00E4FF' },
                            { offset: 1, color: '#0096FF' }
                        ])
                    }
                }
            },
            {
                name: '2023',
                type: 'bar',
                barWidth: '30%',
                data: gdpData.year2023,
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#42DEFF' },
                        { offset: 1, color: '#0055A8' }
                    ])
                },
                emphasis: {
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            { offset: 0, color: '#8AEEFF' },
                            { offset: 1, color: '#0072D5' }
                        ])
                    }
                }
            }
        ]
    };

    // 监听窗口大小变化，调整图表大小
    useEffect(() => {
        const resizeHandler = () => {
            if (chartRef.current) {
                const chart = (chartRef.current as any).getInstance();
                if (chart) {
                    chart.resize();
                }
            }
        };

        window.addEventListener('resize', resizeHandler);
        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <Block className="p-0" title={
            <div className="flex items-center gap-2">
                <div className="w-[4px] h-[16px] bg-[#00E4FF] rounded-none"></div>
                <div className="text-white text-[18px] font-bold">华安县地区生产总值</div>
            </div>
        } >
            <div className="w-full h-full p-4 flex flex-col">
                {/* 单位说明 */}
                <div className="text-[#8AB4D9] text-[14px] mb-4 self-start pl-2">单位: 亿元</div>

                {/* 图表容器 */}
                <div className="flex-1 relative border border-[#0072D5]/30 rounded-md bg-[#01193C]/50 p-4">
                    <Chart
                        ref={chartRef}
                        style={{ width: '100%', height: '100%' }}
                        option={barOption}
                    />
                </div>
            </div>
        </Block>
    );
}