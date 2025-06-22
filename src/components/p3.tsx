import { Block } from './block';
import { Chart, type EChartsOption } from './charts';

/**
 * 县域产业对比图表配置
 */
const options: EChartsOption = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
	},
	legend: {
		data: ['2023年', '2024年'],
		textStyle: {
			color: '#fff',
		},
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true,
	},
	xAxis: [
		{
			type: 'category',
			data: ['第一产业', '第二产业', '第三产业', '地区生产总值'],
			axisLine: {
				lineStyle: {
					color: '#fff',
				},
			},
			axisLabel: {
				color: '#fff',
			},
		},
	],
	yAxis: [
		{
			type: 'value',
			name: '单位：万元',
			nameTextStyle: {
				color: '#fff',
			},
			axisLabel: {
				formatter: '{value}',
				color: '#fff',
			},
			axisLine: {
				lineStyle: {
					color: '#fff',
				},
			},
			splitLine: {
				lineStyle: {
					color: 'rgba(255, 255, 255, 0.1)',
				},
			},
		},
	],
	series: [
		{
			name: '2023年',
			type: 'bar',
			barWidth: 12,
			emphasis: {
				focus: 'series',
			},
			data: [388577, 821092, 475171, 1684840],
			itemStyle: {
				color: '#4992ff',
			},
		},
		{
			name: '2024年',
			type: 'bar',
			emphasis: {
				focus: 'series',
			},
			barWidth: 12,
			data: [394601, 864730, 509586, 1768917],
			itemStyle: {
				color: '#7cffb2',
			},
		},
	],
};

export function P3() {
	return (
		<Block title={'县域产业'}>
			<Chart option={options} />
		</Block>
	);
}
