// ... existing code ...
import * as echarts from "echarts";
import {
  type CSSProperties,
  type ReactNode,
  type RefObject,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";

// 定义更具体的图表类型
export type ChartType = 'bar' | 'line' | 'pie' | 'scatter' | 'map' | 'radar';

export type EChartsOption = echarts.EChartsOption;

export type ChartInsGetter = {
  getInstance: () => echarts.ECharts | null;
  updateData: (data: any[]) => void;
};

type ChartProps = {
  ref?: RefObject<ChartInsGetter | null>;
  className?: string;
  style?: CSSProperties;
  option?: EChartsOption;
  notMerge?: boolean;
  lazyUpdate?: boolean;
  showLoading?: boolean;
  theme?: 'light' | 'dark' | 'roma' | 'infographic';
  type?: ChartType;
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
    theme = 'light',
  } = props;
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // 支持主题
      chartInstance.current = echarts.init(chartRef.current, theme);
    }

    const resizeHandler = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
      if (chartInstance.current) {
        chartInstance.current.dispose();
        chartInstance.current = null;
      }
    };
  }, [theme]);

  useEffect(() => {
    if (chartInstance.current && option) {
      chartInstance.current.setOption(option, notMerge, lazyUpdate);
    }
  }, [option, notMerge, lazyUpdate]);

  // 添加更新数据的方法
  const updateData = (data: any[]) => {
    if (chartInstance.current) {
      chartInstance.current.setOption({
        series: [{
          data
        }]
      });
    }
  };

  useImperativeHandle(
    props.ref,
    () => ({
      getInstance: () => chartInstance.current,
      updateData
    }),
    [chartInstance.current]
  );
  return (
    <div
      ref={chartRef}
      className={`w-full h-full ${className || ""}`}
      style={style}
    />
  );
}