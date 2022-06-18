import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprovalPengajuanComponent } from './approval-pengajuan.component';

describe('ApprovalPengajuanComponent', () => {
  let component: ApprovalPengajuanComponent;
  let fixture: ComponentFixture<ApprovalPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprovalPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprovalPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
