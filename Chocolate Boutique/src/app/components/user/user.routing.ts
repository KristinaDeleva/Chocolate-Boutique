import { UserComponent } from './user.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/core/guards/auth.guard';
import { UserCartItemsComponent } from './user-cart-items/user-cart-items.component';

export const UserRoutes: Routes = [
	{
		path: 'users',
		component: UserComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: '',
				component: UserAccountComponent,
				outlet: 'profileOutlet'
			},
			{
				path: 'cart-items',
				component: UserCartItemsComponent,
				outlet: 'profileOutlet'
			},
		]
	}
];