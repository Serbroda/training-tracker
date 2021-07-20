import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RunChartComponent } from './run-chart.component';

describe('RunChartComponent', () => {
  let component: RunChartComponent;
  let fixture: ComponentFixture<RunChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RunChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RunChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
