import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentConfirmComponent } from './payment-confirm.component';

describe('PaymentConfirmComponent', () => {
  let component: PaymentConfirmComponent;
  let fixture: ComponentFixture<PaymentConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
