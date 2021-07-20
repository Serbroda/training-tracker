import { AfterViewInit, Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
    selector: 'app-run-chart',
    templateUrl: './run-chart.component.html',
    styleUrls: ['./run-chart.component.scss'],
})
export class RunChartComponent implements OnInit, AfterViewInit {
    name = 'Angular 123';
    labels: String[] = ['A', 'B', 'C', 'D', 'E', 'G'];
    dataSet1: Number[] = [86, 114, 10, 106, 107, 111];
    dataSet2: Number[] = [40, 220, 15, 16, 24, 212];

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.createChart();
    }

    createChart(): void {
        let chartInstance = new Chart('line-chart', {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: `${new Date().getFullYear()}`,
                        backgroundColor: '#4c51bf',
                        borderColor: '#4c51bf',
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: `${new Date().getFullYear() - 1}`,
                        fill: false,
                        backgroundColor: '#fff',
                        borderColor: '#fff',
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'end',
                        labels: {
                            color: 'white',
                        },
                    },
                    title: {
                        display: false,
                        text: 'Chart.js Line Chart',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                },
                scales: {
                    x: {
                        ticks: {
                            color: 'rgba(255,255,255,.7)',
                        },
                    },
                    y: {
                        ticks: {
                            color: 'rgba(255,255,255,.7)',
                        },
                    },
                },
            },
        });
    }

    createChart1() {
        const config: any = {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#4c51bf',
                        borderColor: '#4c51bf',
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#fff',
                        borderColor: '#fff',
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Sales Charts',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'white',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    xAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(255,255,255,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Month',
                                fontColor: 'white',
                            },
                            gridLines: {
                                display: false,
                                borderDash: [2],
                                borderDashOffset: [2],
                                color: 'rgba(33, 37, 41, 0.3)',
                                zeroLineColor: 'rgba(0, 0, 0, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                    yAxes: [
                        {
                            ticks: {
                                fontColor: 'rgba(255,255,255,.7)',
                            },
                            display: true,
                            scaleLabel: {
                                display: false,
                                labelString: 'Value',
                                fontColor: 'white',
                            },
                            gridLines: {
                                borderDash: [3],
                                borderDashOffset: [3],
                                drawBorder: false,
                                color: 'rgba(255, 255, 255, 0.15)',
                                zeroLineColor: 'rgba(33, 37, 41, 0)',
                                zeroLineBorderDash: [2],
                                zeroLineBorderDashOffset: [2],
                            },
                        },
                    ],
                },
            },
        };
        let ctx: any = document.getElementById('line-chart') as HTMLCanvasElement;
        ctx = ctx.getContext('2d');
        var myLineChart = new Chart(ctx, config);
    }
}
