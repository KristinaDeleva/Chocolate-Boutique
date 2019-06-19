import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { ProductsComponent } from './products/products.component';
import { ShippingDetailsComponent } from './shipping-details/shipping-details.component';
import { BillingDetailsComponent } from './billing-details/billing-details.component';
import { ResultComponent } from './result/result.component';
import { NgModule } from '@angular/core';



export const checkoutRoutes: Routes = [
	{
		path: 'checkouts',
		component: CheckoutComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: '',
				component: ProductsComponent,
				outlet: 'checkOutlet'
			},
			{
				path: 'shipping-details',
				component: ShippingDetailsComponent,
				outlet: 'checkOutlet'
			},
			{
				path: 'billing-details',
				component: BillingDetailsComponent,
				outlet: 'checkOutlet'
			},
			{
				path: 'result',
				component: ResultComponent,
				outlet: 'checkOutlet'
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(checkoutRoutes) ],
	exports: [ RouterModule ]
})
export class CheckoutRoutingModule {}