import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  loggedUser: firebase.User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getLoggedInUser().subscribe(user => {
      this.loggedUser = user;
    }) 
  }

}
