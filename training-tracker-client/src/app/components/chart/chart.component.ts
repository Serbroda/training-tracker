import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Chart, { ChartConfiguration, ChartOptions, ChartTypeRegistry } from 'chart.js/auto';
import {
    ChartDataset,
    CoreChartOptions,
    DatasetChartOptions,
    ElementChartOptions,
    PluginChartOptions,
    ScaleChartOptions,
} from 'chart.js';
import { DeepPartial } from 'chart.js/types/utils';

/**
 * Maybe better use https://dygraphs.com/ for many points like heart rate...
 */

@Component({
    selector: 'app-chart',
    templateUrl: './chart.component.html',
    styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit, AfterViewInit {
    @Input() type: keyof ChartTypeRegistry;
    @Input() datasets: ChartDataset[] = [];
    @Input() labels: string[] = [];
    @Input() options: DeepPartial<
        CoreChartOptions<any> &
            ElementChartOptions<any> &
            PluginChartOptions<any> &
            DatasetChartOptions<any> &
            ScaleChartOptions<any>
    >;
    @Input() plugins: PluginChartOptions<any>;
    chartInstance: Chart;

    constructor() {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        const plugins: any = {
            ...{
                legend: {
                    position: 'bottom',
                    align: 'end',
                    labels: {
                        color: 'white',
                    },
                },
                title: {
                    display: false,
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                },
            },
            ...this.plugins,
        };
        const options: any = { ...{ maintainAspectRatio: false, responsive: true, plugins }, ...this.options };

        this.chartInstance = new Chart('chartJSChartElement', {
            type: this.type,
            data: {
                labels: this.labels,
                datasets: this.datasets,
            },
            options: options,
        });
    }
}
