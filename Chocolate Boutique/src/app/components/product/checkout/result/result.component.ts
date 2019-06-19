import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/components/shared/models/product';
import { ProductService } from 'src/app/core/services/product.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  products: Product[];
  date: number;
  totalPrice = 0;
  tax = 6.4;

  constructor(private productService: ProductService,
	private router: Router) {
    /* Hiding Billing Tab Element */
    document.getElementById('productsTab').style.display = 'none';
		document.getElementById('shippingTab').style.display = 'none';
		document.getElementById('billingTab').style.display = 'none';
		document.getElementById('resultTab').style.display = 'block';

		this.products = productService.getLocalCartProducts();

		this.products.forEach((product) => {
			this.totalPrice += product.price;
		});

		this.date = Date.now();
   }

  ngOnInit() {
  }

  downloadReceipt() {
		const data = document.getElementById('receipt');

		html2canvas(data).then((canvas) => {
			// Few necessary setting options
			const imgWidth = 208;
			const pageHeight = 295;
			const imgHeight = canvas.height * imgWidth / canvas.width;
			const heightLeft = imgHeight;

			const contentDataURL = canvas.toDataURL('image/png');
			const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
			const position = 0;
			pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
			pdf.save('choco-boutique.pdf'); // Generated PDF
		});
  }
  
  payment() {
	  this.router.navigate(['/success']);
	  localStorage.removeItem('avct_item');
	  this.productService.navbarCartCount = 0;
  }

}
