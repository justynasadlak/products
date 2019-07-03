import { Injectable } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userDataService: UserDataService) { }

  public isAuthenticated(): boolean {
    return !!this.userDataService.getUserData();
  }
}
