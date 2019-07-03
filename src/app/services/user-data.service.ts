import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable, of, throwError } from 'rxjs';
import { delay, flatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: User[] = [];
  private currentUser: User;

  register(user: User): Observable<User> {
    console.log(user);
    this.users.push(user);
    console.log(this.users);
    return of(user).pipe(delay(1000));
  }

  login(email: string, password: string): Observable<User> {
    console.log(this.users);

    console.log(email);
    console.log(password);

    this.currentUser = this.users.find(user => user.email === email && user.password === password);
    console.log(this.currentUser);
    return of(this.currentUser).pipe(
      () => !this.currentUser ? throwError('This is an error!') : of(this.currentUser),
      delay(1000)
    );
  }

  logout(): Observable<User> {
    this.currentUser = null;
    return of(this.currentUser).pipe(delay(1000));
  }

  getUserData() {
    return this.currentUser;
  }

}
