import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;

  private spinner = false;
  constructor(private userDataService: UserDataService, private formBuilder: FormBuilder, private router: Router) {
  }

  private loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });



  onSubmit() {
    this.spinner = true;
    console.log(this.loginForm.value);
    console.log('login');
    this.userDataService.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(data => {
          this.router.navigate(['my-profile']);
        }, e => {
          console.error(e);
        }
      );

  }


}
