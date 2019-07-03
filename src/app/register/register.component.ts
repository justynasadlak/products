import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';
import { Router } from '@angular/router';
import {MatProgressSpinner} from '@angular/material';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  color = 'primary';
  mode = 'determinate';
  value = 50;

  private spinner = false;

  constructor(private userDataService: UserDataService, private formBuilder: FormBuilder, private router: Router) {
  }

  private registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5)]]
  });


  onSubmit() {
    this.spinner = true;
    console.log(this.registerForm.value.name);
    this.userDataService.register(this.registerForm.value).subscribe(data => {
      console.log(data);
      this.router.navigate(['login']);
    });
    // this.registerForm.reset();
  }
}
