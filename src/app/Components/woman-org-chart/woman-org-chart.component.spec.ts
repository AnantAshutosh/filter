import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomanOrgChartComponent } from './woman-org-chart.component';

describe('WomanOrgChartComponent', () => {
  let component: WomanOrgChartComponent;
  let fixture: ComponentFixture<WomanOrgChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomanOrgChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WomanOrgChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
