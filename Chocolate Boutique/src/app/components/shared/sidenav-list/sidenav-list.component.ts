import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {
  user: firebase.User;

  constructor(
    public authService: AuthService,
    public productService: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getLoggedInUser()
      .subscribe(user => {
        this.user = user;
      })
  }

  account() {
    this.router.navigate(['/users']);
  }

  logout() {
    this.authService.logout();
  }
}
