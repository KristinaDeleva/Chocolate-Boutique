import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.css']
})
export class CartProductComponent implements OnInit {
  cartProducts: Product[];
	showDataNotFound = true;

	// Not Found Message
	messageTitle = 'No Products Found in Cart';
  messageDescription = 'Please, Add Products to Cart';
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getCartProduct();
  }

  removeCartProduct(product: Product) {
		this.productService.removeLocalCartProduct(product);

		// Recalling
		this.getCartProduct();
	}

	getCartProduct() {
		this.cartProducts = this.productService.getLocalCartProducts();
	}

}
