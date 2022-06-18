import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPengajuanComponent } from './form-pengajuan.component';

describe('FormPengajuanComponent', () => {
  let component: FormPengajuanComponent;
  let fixture: ComponentFixture<FormPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
