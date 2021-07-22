import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitCalcComponent } from './profit-calc.component';

describe('ProfitCalcComponent', () => {
  let component: ProfitCalcComponent;
  let fixture: ComponentFixture<ProfitCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
