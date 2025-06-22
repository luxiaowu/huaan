import { Block } from './block.tsx';
import { Chart, type EChartsOption } from './charts.tsx';

// 定义颜色数组，包含用户指定的三种颜色和一种新增的颜色
const colors = ['#24DCF7', '#FFDB15', '#10E8AA', '#FF7A5A']; // 添加了橙红色作为第四种颜色

const options: EChartsOption = {
	title: {
		text: '各产品类别销售数据对比（本月vs上月）',
		left: 'center',
		textStyle: {
			fontSize: 18,
			fontWeight: 'bold',
			color: '#ffffff',
		},
	},
	tooltip: {
		trigger: 'axis',
		backgroundColor: 'rgba(40,40,40,0.9)',
		borderColor: '#555',
		borderWidth: 1,
		textStyle: {
			color: '#ffffff',
		},
		formatter: function (params) {
			let result = `<strong>${params[0].axisValue}</strong><br/>`;
			params.forEach((param) => {
				result += `${param.marker} ${param.seriesName}: <strong>${param.value.toFixed(2)}</strong> 元<br/>`;
			});
			return result;
		},
	},
	legend: {
		data: [
			'本月茶叶',
			'本月玉石',
			'本月农产品',
			'本月其他',
			'上月茶叶',
			'上月玉石',
			'上月农产品',
			'上月其他',
		],
		top: 30,
		itemGap: 20,
		textStyle: {
			color: '#ffffff',
		},
	},
	grid: {
		left: '5%',
		right: '5%',
		bottom: '5%',
		top: '30%',
		containLabel: true,
	},
	xAxis: {
		type: 'category',
		boundaryGap: false,
		data: ['第一周', '第二周', '第三周', '第四周'],
		axisLine: {
			lineStyle: { color: '#aaaaaa' },
		},
		axisTick: {
			lineStyle: { color: '#aaaaaa' },
		},
		axisLabel: {
			color: '#dddddd',
			fontSize: 12,
		},
	},
	yAxis: {
		type: 'value',
		min: 500, // 设置Y轴起始值为500
		axisLabel: {
			formatter: '{value} 元',
			color: '#dddddd',
			fontSize: 12,
		},
		axisLine: {
			lineStyle: { color: '#aaaaaa' },
		},
		splitLine: {
			lineStyle: {
				color: '#444444',
				type: 'dashed',
			},
		},
	},
	series: [
		{
			name: '本月茶叶',
			type: 'line',
			data: [1250.0, 1320.8, 1480.3, 1560.9],
			itemStyle: { color: colors[0] }, // 蓝色 #24DCF7
			lineStyle: { width: 3 },
			symbol: 'circle',
			symbolSize: 6,
		},
		{
			name: '本月玉石',
			type: 'line',
			data: [860.5, 920.7, 1050.2, 1120.6],
			itemStyle: { color: colors[1] }, // 黄色 #FFDB15
			lineStyle: { width: 3 },
			symbol: 'circle',
			symbolSize: 6,
		},
		{
			name: '本月农产品',
			type: 'line',
			data: [1530.2, 1610.5, 1720.8, 1850.3],
			itemStyle: { color: colors[2] }, // 绿色 #10E8AA
			lineStyle: { width: 3 },
			symbol: 'circle',
			symbolSize: 6,
		},
		{
			name: '本月其他',
			type: 'line',
			data: [680.3, 750.6, 810.4, 880.7],
			itemStyle: { color: colors[3] }, // 橙红色 #FF7A5A
			lineStyle: { width: 3 },
			symbol: 'circle',
			symbolSize: 6,
		},
		{
			name: '上月茶叶',
			type: 'line',
			data: [1100.2, 1180.5, 1260.8, 1350.9],
			itemStyle: { color: colors[0] }, // 与本月茶叶相同颜色
			lineStyle: {
				width: 2,
				type: 'dashed',
			},
			symbol: 'diamond',
			symbolSize: 5,
		},
		{
			name: '上月玉石',
			type: 'line',
			data: [780.4, 840.3, 910.6, 980.7],
			itemStyle: { color: colors[1] }, // 与本月玉石相同颜色
			lineStyle: {
				width: 2,
				type: 'dashed',
			},
			symbol: 'diamond',
			symbolSize: 5,
		},
		{
			name: '上月农产品',
			type: 'line',
			data: [1350.6, 1420.7, 1530.4, 1600.2],
			itemStyle: { color: colors[2] }, // 与本月农产品相同颜色
			lineStyle: {
				width: 2,
				type: 'dashed',
			},
			symbol: 'diamond',
			symbolSize: 5,
		},
		{
			name: '上月其他',
			type: 'line',
			data: [620.5, 670.2, 730.3, 790.6],
			itemStyle: { color: colors[3] }, // 与本月其他相同颜色
			lineStyle: {
				width: 2,
				type: 'dashed',
			},
			symbol: 'diamond',
			symbolSize: 5,
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
