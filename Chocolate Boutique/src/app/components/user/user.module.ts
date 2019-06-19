import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { UserAccountComponent } from './user-account/user-account.component';
import { UserRoutes } from './user.routing';
import { UserComponent } from './user.component';
import { UserCartItemsComponent } from './user-cart-items/user-cart-items.component';

@NgModule({
  declarations: [
    UserAccountComponent,
    UserComponent,
    UserCartItemsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(UserRoutes)
  ],
  schemas: [
    NO_ERRORS_SCHEMA,
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class UserModule { }
