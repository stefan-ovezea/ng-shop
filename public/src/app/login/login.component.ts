import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../shared/services/user.service';
import { Router } from '@angular/router';
import { AuthentifiedUserResponse } from '../shared/models/user';

@Component({
  selector: 'shop-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {}

  ngOnInit() {
    this.cleanStore();
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', [Validators.required, Validators.maxLength(6)]),
      password: new FormControl('', Validators.required)
    });
  }

  login() {
    this.userService.authenticate(this.loginForm.value).subscribe((response: AuthentifiedUserResponse) => {
      this.addUserToStore(response);
      this.router.navigateByUrl('/home');
    }, (errorResponse) => (this.errorMessage = errorResponse.error.message));
  }

  private cleanStore() {
    localStorage.removeItem('currentUser');
  }

  private addUserToStore(user: AuthentifiedUserResponse) {
    localStorage.setItem('currentUser', user.username);
  }
}
