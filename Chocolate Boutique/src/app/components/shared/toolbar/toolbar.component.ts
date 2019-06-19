import { 
  Component, 
  OnInit, 
  Output,
  EventEmitter, 
  OnDestroy
} from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  @Output() sidenavToggle = new EventEmitter<void>();
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

  toggleSidenav() {
    this.sidenavToggle.emit();
  }

  create() {
    this.router.navigate(['/create']);
  }

  account() {
    this.router.navigate(['/users']);
  }

  logout() {
    this.authService.logout();
  }
}
