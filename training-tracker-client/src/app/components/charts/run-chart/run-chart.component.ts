import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-run-chart',
    templateUrl: './run-chart.component.html',
    styleUrls: ['./run-chart.component.scss'],
})
export class RunChartComponent implements OnInit {
    datasets: any = [
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
    ];
    constructor() {}

    ngOnInit(): void {}
}
