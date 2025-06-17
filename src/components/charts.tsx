import * as echarts from 'echarts';
import {
	type CSSProperties,
	type ReactNode,
	type RefObject,
	useEffect,
	useImperativeHandle,
	useRef,
} from 'react';

export type EChartsOption = echarts.EChartsOption;

export type ChartInsGetter = {
	getInstance: () => echarts.ECharts | null;
};

type ChartProps = {
	ref?: RefObject<ChartInsGetter | null>;
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

	useEffect(() => {
		if (chartRef.current) {
			chartInstance.current = echarts.init(chartRef.current);
		}

		const resizeHandler = () => {
			if (chartInstance.current) {
				chartInstance.current.resize();
			}
		};
		window.addEventListener('resize', resizeHandler);
		return () => {
			window.removeEventListener('resize', resizeHandler);
			if (chartInstance.current) {
				chartInstance.current.dispose();
				chartInstance.current = null;
			}
		};
	}, []);

	useEffect(() => {
		if (chartInstance.current && option) {
			chartInstance.current.setOption(option, notMerge, lazyUpdate);
		}
	}, [option, notMerge, lazyUpdate]);

	useImperativeHandle(
		props.ref,
		() => ({
			getInstance: () => chartInstance.current,
		}),
		[chartInstance.current],
	);
	return (
		<div
			ref={chartRef}
			className={`w-full h-full ${className || ''}`}
			style={style}
		/>
	);
}
