import React, { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { useSelector } from 'react-redux';

// Register necessary components
echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

const Pie = () => {

    const { isDark } = useSelector(state => state.global);

    useEffect(() => {
        const dom = document.getElementById('chart-container');
        const myChart = echarts.init(dom);

        myChart.setOption({
            title: {
                text: 'Popular Operators',
                subtext: 'Statistics',
                left: 'center',
                textStyle: {
                    color: isDark ? '#fff' : '#000' // Adjust title text color based on theme
                }
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'right'
            },
            series: [
                {
                    name: 'In Trend',
                    type: 'pie',
                    radius: '40%',
                    data: [
                        { value: 4508, name: 'BSNL' },
                        { value: 10735, name: 'Jio' },
                        { value: 9876, name: 'Vi' },
                        { value: 8876, name: 'Airtel' },
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                    label: {
                        color: isDark ? '#fff' : '#000' 
                    }
                }
            ],
        });

        window.addEventListener('resize', () => {
            myChart.resize();
        });

        return () => {
            myChart.dispose();
            window.removeEventListener('resize', () => {
                myChart.resize();
            });
        };
    }, []);

    return <div id="chart-container" style={{ width: '100%', height: '400px' }} />;
};

export default Pie;
