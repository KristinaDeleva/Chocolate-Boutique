import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, Observable, of as observableOf, of } from 'rxjs';
import { MatSnackBar } from '@angular/material';
import { map, switchMap } from 'rxjs/operators';
import { auth, User } from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  users$: Observable<firebase.User>;

  uid = this.afAuth.authState.pipe(
    map(authState => {
      if(!authState) {
        return null;
      }else {
        return authState.uid;
      }
    })
  );


  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router,
    private snackbar: MatSnackBar,
  ) {  }


  isAdmin: Observable<boolean> = this.uid.pipe(
    switchMap(uid => {
      if(!uid) {
        return observableOf(false);
      }else {
        return this.db.object<boolean>('/admin/' + uid).valueChanges()
      }
    })
  )

  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider())
    this.snackbar.open('Login successfully', 'Undo', {
      duration: 3000
    })
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }


  getLoggedInUser() {
    return this.afAuth.authState;
  }
}