import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitcalcComponent } from './profitcalc.component';

describe('ProfitcalcComponent', () => {
  let component: ProfitcalcComponent;
  let fixture: ComponentFixture<ProfitcalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfitcalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitcalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
