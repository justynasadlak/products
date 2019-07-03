import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  private user: User;

  constructor(private userDataService: UserDataService, private router: Router) { }

  ngOnInit() {
    this.user = this.userDataService.getUserData();
  }

  logout() {
    this.userDataService.logout().subscribe(data => this.router.navigate(['login']));
  }


}
