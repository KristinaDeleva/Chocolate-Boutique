import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product } from '../../shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-products',
  templateUrl: './edit-products.component.html',
  styleUrls: ['./edit-products.component.css']
})
export class EditProductsComponent implements OnInit {
  editForm: FormGroup;
  products: Product;
  id;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private snackbar: MatSnackBar
    
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      this.productService.get(this.id).valueChanges().subscribe(p => {
        this.editForm = this.fb.group({
          title: [this.products.title, [Validators.required, Validators.minLength(3)]],
          description: [this.products.description, [Validators.required, Validators.minLength(10)]],
          image: [this.products.image, Validators.required],
          price: [this.products.price, [Validators.required, Validators.min(1)]],
        })
      })
    })
  }

  edit() {

  }

}
