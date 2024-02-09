import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts/core';
import {
  LineChart
} from 'echarts/charts';
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
} from 'echarts/components';
import {
  CanvasRenderer
} from 'echarts/renderers';

// Register the necessary components
echarts.use([TitleComponent, TooltipComponent, GridComponent, LineChart, CanvasRenderer]);

const MyChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    // Example data
    const data = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
      }]
    };

    // Render chart with data
    chart.setOption(data);

    // Cleanup
    return () => {
      chart.dispose(); // Dispose the chart instance when unmounting
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return <div ref={chartRef} style={{ width: '100%', height: '300px' }} />;
};

export default MyChart;
