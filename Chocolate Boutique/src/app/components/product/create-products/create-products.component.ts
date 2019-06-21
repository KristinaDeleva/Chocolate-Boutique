import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.css']
})
export class CreateProductsComponent implements OnInit {
  createForm: FormGroup;
  
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private snackbar: MatSnackBar,
    private productService: ProductService) {  }


  ngOnInit() {
    this.createForm = this.fb.group({
      title: [null, [Validators.required, Validators.minLength(3)]],
      description: [null, [Validators.required, Validators.minLength(10)]],
      image: [null, Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
    })
  }

  create() {
    this.productService.create(this.createForm.value);
    this.snackbar.open('Product was add successfull', 'X', {
      duration: 3000
    });
    this.router.navigate(['/product']);
  }

}
