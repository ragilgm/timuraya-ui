import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPengajuanComponent } from './report-pengajuan.component';

describe('ReportPengajuanComponent', () => {
  let component: ReportPengajuanComponent;
  let fixture: ComponentFixture<ReportPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
