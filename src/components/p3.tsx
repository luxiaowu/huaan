import { Block } from './block';
import { Chart, type EChartsOption } from './charts';

/**
 * 饼图
 */
const options: EChartsOption = {
	title: {
		text: '县域产业饼状图',
		left: 'center',
		textStyle: {
			color: '#ffffff',
			fontSize: 16,
		},
	},
	color: ['#24DCF7', '#FFDB15', '#10E8AA'],
	tooltip: {
		trigger: 'item',
		formatter: '{a} <br/>{b} : {c} ({d}%)',
	},
	legend: {
		itemGap: 30,
		textStyle: {
			color: '#ffffff',
		},
		left: 'center',
		top: 'bottom',
		orient: 'horizontal',
		data: ['农业产品', '矿产资源', '文化旅游产业'],
	},
	series: [
		{
			name: '访问来源',
			type: 'pie',
			radius: ['40%', '50%'],
			center: ['50%', '50%'],
			data: [
				{ value: 335, name: '农业产品' },
				{ value: 310, name: '矿产资源' },
				{ value: 234, name: '文化旅游产业' },
			],
			label: {
				fontSize: 14,
				color: 'inherit',
				formatter: '{name|{b}}\n{time|{d} %}',
				lineHeight: 20,
				rich: {
					time: {
						fontSize: 14,
						color: '#fff',
					},
				},
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
