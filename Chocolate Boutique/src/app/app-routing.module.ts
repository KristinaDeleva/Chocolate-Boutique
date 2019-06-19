import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AboutComponent } from './components/about/about.component';
import { DirectionComponent } from './components/direction/direction.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { CreateProductsComponent } from './components/product/create-products/create-products.component';
import { EditProductsComponent } from './components/product/edit-products/edit-products.component';
import { CartProductComponent } from './components/product/cart-product/cart-product.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SuccessShippingComponent } from './components/product/success-shipping/success-shipping.component';
import { AdminGuard } from './core/guards/admin.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: DirectionComponent },
  { path: 'product', component: AllProductsComponent },
  { path: 'create', component: CreateProductsComponent, canActivate: [AdminGuard] },
  { path: 'edit/:id', component: EditProductsComponent, canActivate: [AdminGuard] },
  { path: 'cart', component: CartProductComponent },
  { path: 'success', component: SuccessShippingComponent },
  // { path: 'checkouts', loadChildren: './components/product/checkout/checkout.module#CheckoutModule' },
  // { path: 'users', loadChildren: './components/user/user.module#UserModule' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
