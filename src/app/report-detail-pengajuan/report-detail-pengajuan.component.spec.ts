import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailPengajuanComponent } from './report-detail-pengajuan.component';

describe('ReportDetailPengajuanComponent', () => {
  let component: ReportDetailPengajuanComponent;
  let fixture: ComponentFixture<ReportDetailPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportDetailPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
