import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Chart, type ChartInsGetter, type EChartsOption } from './charts';
// import mapJson from './map.json';
import data from './screen_town.json';
import mapJson from './updated_huaan_county.json';

/**
 * 地图组件
 */
export function CenterMap() {
	const optionRef = useRef<EChartsOption>(undefined);
	const mapRef = useRef<ChartInsGetter>(null);
	const highlightRef = useRef<number>(0);
	const getOptions = () => {
		// @ts-ignore
		echarts.registerMap('华安县', mapJson);
		optionRef.current = {
			tooltip: {
				show: !!data,
				showDelay: 20,
				backgroundColor: 'transparent',
				padding: 0,
				borderWidth: 0,
				position: ['75%', '40%'],
				// biome-ignore lint/suspicious/noExplicitAny: <explanation>
				formatter: (params: any) => {
					// biome-ignore lint/style/noNonNullAssertion: <explanation>
					const item = data.find((item) => item.name === params.name)!;
					if (!item) {
						return '';
					}
					return `
						<div class="map-tooltip">
							<div class="mb-5 sub-font text-base">${params.name}</div>
							<div class="flex items-center gap-2 text-white mb-1.5">
								<span class="point"></span>
								<span>收到咨询</span>
								<span class="ml-auto text-[#2DE8F0] text-lg italic">${item.resv}</span>
							</div>
							<div class="flex items-center gap-2 text-white mb-1.5">
								<span class="point"></span>
								<span>回复咨询</span>
								<span class="ml-auto text-[#2DE8F0] text-lg italic">${item.resp}</span>
							</div>
							<div class="flex items-center gap-2 text-white mb-1.5">
								<span class="point"></span>
								<span>回复率</span>
								<span class="ml-auto text-[#2DE8F0] text-lg italic">${item.respRate}</span>
							</div>
							<div class="flex items-center gap-2 text-white">
								<span class="point"></span>
								<span>办结率</span>
								<span class="ml-auto text-[#2DE8F0] text-lg italic">${item.finishRate}</span>
							</div>
						</div>
						`;
				},
			},
			geo: [
				{
					left: 'center',
					top: 10,
					map: '华安县',
					roam: false,
					label: {
						show: true,
						color: '#fff',
						fontSize: 14,
					},
					itemStyle: {
						borderColor: '#fff',
						borderWidth: 1,
						shadowColor: '#8cd3ef',
						shadowOffsetY: 10,
						shadowBlur: 50,
						areaColor: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [
								{
									offset: 0,
									color: 'rgba(0,222,255, 0.7)', // 0% 处的颜色
								},
								{
									offset: 1,
									color: 'rgba(9,29,217, 0.7)', // 100% 处的颜色
								},
							],
							global: false, // 缺省为 false
						},
					},
					emphasis: {
						itemStyle: {
							borderWidth: 2,
							shadowColor: '#8cd3ef',
							shadowOffsetY: 20,
							shadowBlur: 30,
							areaColor: {
								type: 'linear',
								x: 0,
								y: 0,
								x2: 0,
								y2: 1,
								colorStops: [
									{
										offset: 0,
										color: 'rgba(0,222,255, 1)', // 0% 处的颜色
									},
									{
										offset: 1,
										color: 'rgba(9,29,217, 1)', // 100% 处的颜色
									},
								],
								global: false, // 缺省为 false
							},
						},
						label: {
							show: true,
							color: '#fff',
							fontSize: 14,
							fontWeight: 'bold',
						},
					},
					width: 480,
					height: 480,
				},
			],
			series: [
				{
					type: 'map',
					map: '华安县',
					geoIndex: 0,
					data: data,
					select: {
						disabled: true,
					},
				},
			],
		};
	};
	// 地图轮播
	function highlightMap() {
		const chart = mapRef.current?.getInstance();
		chart?.dispatchAction({
			type: 'downplay',
			seriesIndex: 0,
		});
		chart?.dispatchAction({
			type: 'highlight',
			seriesIndex: 0,
			dataIndex: highlightRef.current,
		});
		chart?.dispatchAction({
			type: 'showTip',
			seriesIndex: 0,
			dataIndex: highlightRef.current,
		});
	}
	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getOptions();
		const timer = setInterval(() => {
			highlightMap();
			highlightRef.current += 1;
			if (highlightRef.current >= data.length) {
				highlightRef.current = 0;
			}
		}, 3000);
		return () => {
			clearInterval(timer);
		};
	}, []);

	return (
		<div className={'h-0 grow map-container'}>
			<Chart ref={mapRef} option={optionRef.current} notMerge />
		</div>
	);
}
