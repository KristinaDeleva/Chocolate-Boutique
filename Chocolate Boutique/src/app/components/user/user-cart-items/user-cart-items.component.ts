import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ShippingService } from 'src/app/core/services/shipping.service';

@Component({
  selector: 'app-user-cart-items',
  templateUrl: './user-cart-items.component.html',
  styleUrls: ['./user-cart-items.component.css']
})
export class UserCartItemsComponent implements OnInit {
  date: number;
  user: firebase.User;

  constructor(
    private authService: AuthService,
    private shippingService: ShippingService
    ) { 
    this.date = Date.now();
  }

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe(user => {
      this.user = user;
    }) 
  }

}
