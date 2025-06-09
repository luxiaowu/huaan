import { Block } from './block.tsx';
import { Chart, type EChartsOption } from './charts.tsx';

const options: EChartsOption = {
	color: ['#2EBAFF', '#51FED2'],
	grid: {
		top: 40,
		left: 20,
		right: 20,
		bottom: 20,
		containLabel: true,
	},
	xAxis: {
		type: 'category',
		data: ['第一产业增加值', '第二产业增加值', '第三产业增加值'],
		axisLine: {
			show: false,
		},
		axisLabel: {
			color: '#ffffff',
			fontSize: 14,
			margin: 14,
		},
	},

	yAxis: {
		name: '单位: 个',
		nameTextStyle: {
			color: '#ffffff',
			fontSize: 12,
		},
		interval: 10,
		type: 'value',
		splitLine: {
			lineStyle: { type: [10, 5], dashOffset: 5, color: '#196CEC' },
		},
		axisLabel: {
			color: '#ffffff',
			fontSize: 12,
		},
	},
	series: [
		{
			data: [38, 80, 48],
			type: 'bar',
			barWidth: 12,
		},
		{
			data: [35, 69, 42],
			type: 'bar',
			barWidth: 12,
			barGap: '100%',
		},
	],
};

export function P4() {
	return (
		<Block title={'华安县地区产业生产总值'}>
			<Chart option={options} />
		</Block>
	);
}
