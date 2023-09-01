import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

export default function DataScreen() {
  const lineChartRef = useRef(null);
  const barChartRef = useRef(null);
  const pieChartRef = useRef(null);
  const guageChartRef = useRef(null);

  const lineOptions = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {},
      },
    ],
  };

  const barOptions = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)',
        },
      },
    ],
  };

  const pieOptions = {
    title: {
      text: 'Referer of a Website',
      subtext: 'Fake Data',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  const guageOptions = {
    tooltip: {
      formatter: '{a} <br/>{b} : {c}%',
    },
    series: [
      {
        name: 'Pressure',
        type: 'gauge',
        progress: {
          show: true,
        },
        detail: {
          valueAnimation: true,
          formatter: '{value}',
        },
        data: [
          {
            value: 50,
            name: 'SCORE',
          },
        ],
      },
    ],
  };

  useEffect(() => {
    const _chart = echarts.init(lineChartRef.current as unknown as HTMLElement);
    _chart.setOption(lineOptions);
    const _chart2 = echarts.init(barChartRef.current as unknown as HTMLElement);
    _chart2.setOption(barOptions);
    const _chart3 = echarts.init(pieChartRef.current as unknown as HTMLElement);
    _chart3.setOption(pieOptions);
    const _chart4 = echarts.init(
      guageChartRef.current as unknown as HTMLElement,
    );
    _chart4.setOption(guageOptions);
  }, [lineOptions, barOptions, pieOptions, guageOptions]);
  return (
    <>
      <div className="w-full h-[400px] flex space-x-[10px]">
        <div className="flex-1">
          <div className="text-center font-semibold text-[18px] mb-[8px]">
            折线图
          </div>
          <div
            ref={lineChartRef}
            className="h-[90%] border border-solid border-slate-400 rounded-[5px]"
          ></div>
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold text-[18px] mb-[8px]">
            柱状图
          </div>
          <div
            ref={barChartRef}
            className="h-[90%] border border-solid border-slate-400 rounded-[5px]"
          ></div>
        </div>
      </div>
      <div className="w-full h-[400px] flex space-x-[10px]">
        <div className="flex-1">
          <div className="text-center font-semibold text-[18px] mb-[8px]">
            饼状图
          </div>
          <div
            ref={pieChartRef}
            className="h-[90%] border border-solid border-slate-400 rounded-[5px]"
          ></div>
        </div>
        <div className="flex-1">
          <div className="text-center font-semibold text-[18px] mb-[8px]">
            仪表盘
          </div>
          <div
            ref={guageChartRef}
            className="h-[90%] border border-solid border-slate-400 rounded-[5px]"
          ></div>
        </div>
      </div>
    </>
  );
}
