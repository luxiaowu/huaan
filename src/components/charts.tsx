import * as echarts from 'echarts';
import { type CSSProperties, type ReactNode, useEffect, useRef } from 'react';

export type EChartsOption = echarts.EChartsOption;

type ChartProps = {
	className?: string;
	style?: CSSProperties;
	option?: EChartsOption;
	notMerge?: boolean;
	lazyUpdate?: boolean;
	showLoading?: boolean;
	children?: ReactNode;
};

/**
 * ECharts React wrapper component
 */
export function Chart(props: ChartProps) {
	const {
		className,
		style,
		option,
		notMerge = false,
		lazyUpdate = false,
	} = props;
	const chartRef = useRef<HTMLDivElement>(null);
	const chartInstance = useRef<echarts.ECharts | null>(null);

	// Initialize chart
	useEffect(() => {
		// Initialize chart
		if (chartRef.current) {
			chartInstance.current = echarts.init(chartRef.current);
		}

		// Handle window resize
		const resizeHandler = () => {
			if (chartInstance.current) {
				chartInstance.current.resize();
			}
		};
		window.addEventListener('resize', resizeHandler);

		// Cleanup
		return () => {
			window.removeEventListener('resize', resizeHandler);
			if (chartInstance.current) {
				chartInstance.current.dispose();
				chartInstance.current = null;
			}
		};
	}, []);

	// Update chart option
	useEffect(() => {
		if (chartInstance.current && option) {
			// Set chart option
			chartInstance.current.setOption(option, notMerge, lazyUpdate);
		}
	}, [option, notMerge, lazyUpdate]);

	return (
		<div
			ref={chartRef}
			className={`w-full h-full ${className || ''}`}
			style={style}
		/>
	);
}
