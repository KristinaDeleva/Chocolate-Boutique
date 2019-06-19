import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutRoutingModule } from './checkout.routing';
import { CheckoutComponent } from './checkout.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { ProductsComponent } from './products/products.component';
import { ResultComponent } from './result/result.component';
import { CheckoutNavbarComponent } from './checkout-navbar/checkout-navbar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CheckoutComponent,
		BillingDetailsComponent,
		ShippingDetailsComponent,
		ProductsComponent,
		ResultComponent,
		CheckoutNavbarComponent
  ],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
