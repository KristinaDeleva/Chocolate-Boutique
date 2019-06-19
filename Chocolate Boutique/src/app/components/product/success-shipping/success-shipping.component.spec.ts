import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessShippingComponent } from './success-shipping.component';

describe('SuccessShippingComponent', () => {
  let component: SuccessShippingComponent;
  let fixture: ComponentFixture<SuccessShippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessShippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessShippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
