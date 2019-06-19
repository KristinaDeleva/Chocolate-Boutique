import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: firebase.User;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    }) 
  }

  shop() {
    if(this.user) {
      this.router.navigate(['/product'])
    }else {
      this.router.navigate(['/login'])
    }
  }

}
