import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterPengajuanComponent } from './letter-pengajuan.component';

describe('LetterPengajuanComponent', () => {
  let component: LetterPengajuanComponent;
  let fixture: ComponentFixture<LetterPengajuanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterPengajuanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterPengajuanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
