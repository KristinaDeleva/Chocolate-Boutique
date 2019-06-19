import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router, Route, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[];
  filteredProducts: any[];
  products$;
  user: firebase.User;
  selectedBrand: 'All';
  page = 1;

  constructor(
    private productService: ProductService,
    public authService: AuthService,
    private snackbar: MatSnackBar
  ) { 
    this.productService.getAll().subscribe(products => this.filteredProducts = this.products = products);
  }

  ngOnInit() {
    this.authService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
    }) 
    setTimeout(() => {
      this.products$ = this.productService.getAll();
    }, 3000);
  }

  filter(query: string) {
    this.filteredProducts = (query) ? 
    this.products.filter(p => p.title.toLowerCase().includes(query.toLocaleLowerCase())) : this.products;
  }
 
  remove(key: string) {
    console.log(key);
    // this.productService.deleteProduct(key)
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
}
