import finishRate from '../assets/p1/finish-rate.png';
import receive from '../assets/p1/receive.png';
import replyRate from '../assets/p1/reply-rate.png';
import reply from '../assets/p1/reply.png';
import { Block } from './block';
import { Chart, type EChartsOption } from './charts';

const iconMap = {
	replay: reply,
	replyRate: replyRate,
	receive: receive,
	finishRate: finishRate,
};

const data: {
	title: string;
	value: string;
	icon: keyof typeof iconMap;
}[] = [
	{
		title: '收到咨询',
		value: '50',
		icon: 'receive',
	},
	{
		title: '回复咨询',
		value: '40',
		icon: 'replyRate',
	},
	{
		title: '回复率',
		value: '80%',
		icon: 'replay',
	},
	{
		title: '完成率',
		value: '100%',
		icon: 'finishRate',
	},
];

const options: EChartsOption = {
	color: ['#00FFBE', '#00A2FF', '#F2C400', '#6622FF'],
	grid: {
		top: 30,
		left: 20,
		right: 20,
		bottom: 20,
		containLabel: true,
	},
	xAxis: {
		type: 'category',
		data: ['医疗教育', '人居环境', '民生保障', '创业扶持'],
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
			colorBy: 'data',
			type: 'bar',
			barWidth: 25,
			data: [17, 15, 24, 28],
		},
	],
	aria: {
		enabled: true,
		decal: {
			show: true,
		},
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
	},
};

/**
 * 社情民意
 */
export function P1() {
	return (
		<Block title={'社情民意'}>
			<div className={'grow'}>
				<Chart option={options} />
			</div>
			<div className={'grid grid-cols-2 gap-5 place-items-center'}>
				{data.map((item) => (
					<Sub key={item.title} {...item} />
				))}
			</div>
		</Block>
	);
}

type SubProps = {
	title: string;
	value: string;
	icon: keyof typeof iconMap;
	className?: string;
};
function Sub(prop: SubProps) {
	const { title, value, className, icon } = prop;
	return (
		<div
			className={`p1-block-container border border-[#2DE8F0] ${className || ''}`}
		>
			<div className={'flex flex-col justify-between'}>
				<div className={'text-white'}>{title}</div>
				<div className={'italic text-[30px] text-[#2DE8F0]'}>{value}</div>
			</div>
			<img className={'size-14 object-center'} src={iconMap[icon]} alt="" />
		</div>
	);
}
