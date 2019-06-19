import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Product } from 'src/app/components/shared/models/product';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material';

@Injectable({
    providedIn: 'root'
})

export class ProductService {
    products: AngularFireList<Product>;
    product: AngularFireObject<Product>;

    //Navbar Counts
    navbarCartCount = 0;

    constructor(
        private db: AngularFireDatabase,
        private authService: AuthService,
        private snackbar: MatSnackBar
    ) {
        this.calculateLocalCartProdCounts();
    }


    create(product) {
        this.db.list('products').push(product);
    }

    getAll() {
        return this.db.list('products').valueChanges();
    }

    get(key: string) {
        return this.product = this.db.object('/products/' + key);
    }

    update(data: Product) {
        return this.products.update(data.$key, data);
    }

    deleteProduct(key) {
        return this.products.remove(key);
    }


	/*
   ----------  Cart Product Function  ----------
  */

    addToCart(data: Product): void {
        let a: Product[];

        a = JSON.parse(localStorage.getItem('avct_item')) || [];

        a.push(data);
        this.snackbar.open('Adding Product to Cart', 'X', {
            duration: 3000
        });
        setTimeout(() => {
            localStorage.setItem('avct_item', JSON.stringify(a));
            this.calculateLocalCartProdCounts();
        }, 500);
    }

    // Removing cart from local
	removeLocalCartProduct(product: Product) {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item'));

		for (let i = 0; i < products.length; i++) {
			if (products[i].$key === product.$key) {
				products.splice(i, 1);
				break;
			}
		}
		// ReAdding the products after remove
		localStorage.setItem('avct_item', JSON.stringify(products));

		this.calculateLocalCartProdCounts();
    }
    
    // Fetching Locat CartsProducts
	getLocalCartProducts(): Product[] {
		const products: Product[] = JSON.parse(localStorage.getItem('avct_item')) || [];

		return products;
	}

	// returning LocalCarts Product Count
	calculateLocalCartProdCounts() {
		this.navbarCartCount = this.getLocalCartProducts().length;
	}
}