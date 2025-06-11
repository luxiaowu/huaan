import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';
import { Chart, type EChartsOption } from './charts.tsx';
import mapJson from './map.json';

/**
 * 地图组件
 */
export function Map() {
	const optionRef = useRef<EChartsOption>();
	const getOptions = () => {
		echarts.registerMap('华安县', mapJson);
		optionRef.current = {
			tooltip: {
				trigger: 'item',
			},
			geo: [
				{
					map: '华安县',
					roam: false,
					label: {
						show: true,
						color: '#333',
					},
					itemStyle: {
						normal: {
							borderColor: '#c0f3fb',
							borderWidth: 1,
							shadowColor: '#8cd3ef',
							shadowOffsetY: 10,
							shadowBlur: 120,
							areaColor: 'transparent',
						},
					},
					emphasis: {
						itemStyle: {
							areaColor: '#ffcc00',
						},
					},
				},
			],
			series: [
				{
					name: '华安县',
					type: 'map',
					map: '华安县',
					roam: true,
					label: {
						show: true,
						color: '#333',
					},
					itemStyle: {
						areaColor: '#eee',
						borderColor: '#444',
						borderWidth: 1,
					},
					emphasis: {
						itemStyle: {
							areaColor: '#ffcc00',
						},
					},
				},
			],
		};
	};
	useEffect(() => {
		getOptions();
	}, []);
	return (
		<div className={'h-0 grow'}>
			<Chart option={optionRef.current} notMerge />
		</div>
	);
}
