import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule  } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';

import { environment } from 'src/environments/environment';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './components/about/about.component';
import { DirectionComponent } from './components/direction/direction.component';
import { AllProductsComponent } from './components/product/all-products/all-products.component';
import { EditProductsComponent } from './components/product/edit-products/edit-products.component';
import { CreateProductsComponent } from './components/product/create-products/create-products.component';
import { CartProductComponent } from './components/product/cart-product/cart-product.component';
import { CartCalculatorComponent } from './components/product/cart-calculator/cart-calculator.component';
import { NoProductsFoundComponent } from './components/product/no-products-found/no-products-found.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CheckoutModule } from './components/product/checkout/checkout.module';
import { SuccessShippingComponent } from './components/product/success-shipping/success-shipping.component';
import { UserModule } from './components/user/user.module';
import { ScrollTopComponent } from './components/shared/scroll-top/scroll-top.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { SidenavListComponent } from './components/shared/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactFormComponent,
    ScrollTopComponent,
    ToolbarComponent,
    SidenavListComponent,
    FooterComponent,
    AboutComponent,
    DirectionComponent,
    AllProductsComponent,
    EditProductsComponent,
    CreateProductsComponent,
    CartProductComponent,
    CartCalculatorComponent,
    NoProductsFoundComponent,
    PageNotFoundComponent,
    SuccessShippingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    CheckoutModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
