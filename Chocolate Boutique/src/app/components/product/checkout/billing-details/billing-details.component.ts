import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/shared/models/product';
import { AuthService } from 'src/app/core/services/auth.service';
import { BillingService } from 'src/app/core/services/billing.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDetail, User } from 'src/app/components/shared/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {
  userDetails: User;
	products: Product[];
	form: FormGroup;
	user: firebase.User;
	// userDetail: UserDetail;
  
  constructor(
		private billingService: BillingService,
		productService: ProductService,
		private authService: AuthService,
		private fb: FormBuilder,
		private router: Router
  ) {
    /* Hiding Shipping Tab Element */
		document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'none';
		document.getElementById('billingTab').style.display = 'block';
    document.getElementById('resultTab').style.display = 'none';
    
	this.products = productService.getLocalCartProducts();
	authService.getLoggedInUser().subscribe(user => {
		this.user = user;
	});

	this.form = this.fb.group({
		firstName: [null, [Validators.required, Validators.pattern("^[A-Z][a-z]{3,20}$")]],
		lastName: [null, [Validators.required, Validators.pattern("^[A-Z][a-z]{3,20}$")]],
		address: [null, [Validators.required, Validators.minLength(10)]],
		country: [null, Validators.required],
		state: [null, Validators.required],
		zip: [null, Validators.required]
	})
   }

  ngOnInit() {
  }

  updateUserDetails() {
		const data = this.form.value;
		console.log(data);

		data['email'] = this.user.email;
		data['userId'] = this.user.uid;

		let totalPrice = 0;
		const products = [];
		this.products.forEach((product) => {
			delete product['$key'];
			totalPrice += product.price;
			products.push(product);
		});

		data['products'] = products;

		data['totalPrice'] = totalPrice;

		data['billingDate'] = Date.now();

		this.billingService.createBillings(data);

		this.router.navigate([ 'checkouts', { outlets: { checkOutlet: [ 'result' ] } } ]);
	}

}
