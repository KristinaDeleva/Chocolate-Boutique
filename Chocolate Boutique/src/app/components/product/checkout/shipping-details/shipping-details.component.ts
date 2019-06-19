import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShippingService } from 'src/app/core/services/shipping.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/components/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
	selector: 'app-shipping-details',
	templateUrl: './shipping-details.component.html',
	styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit {
	products: Product[];
	form: FormGroup;
	user: firebase.User;

	constructor(
		authService: AuthService,
		private shippingService: ShippingService,
		productService: ProductService,
		private router: Router,
		private fb: FormBuilder
	) {
		/* Hiding products Element */
		document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'block';
		document.getElementById('productsTab').style.display = 'none';
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

	ngOnInit() { }

	updateUserDetails() {
		const data = this.form.value;

		const products = [];

		let totalPrice = 0;

		this.products.forEach((product) => {
			delete product['$key'];
			totalPrice += product.price;
			products.push(product);
		});

		data['products'] = products;

		data['totalPrice'] = totalPrice;

		data['email'] = this.user.email;
		data['shippingDate'] = Date.now();

		this.shippingService.createshippings(data);

		this.router.navigate(['checkouts', { outlets: { checkOutlet: ['billing-details'] } }]);
	}
}
