import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPengajuanComponent } from './edit-pengajuan.component';

describe('EditPengajuanComponent', () => {
  let component: EditPengajuanComponent;
  let fixture: ComponentFixture<EditPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
