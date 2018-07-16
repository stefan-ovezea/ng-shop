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
  loginForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) {}

  ngOnInit() {
    this.cleanStore();
  }

  login() {}

  private cleanStore() {
    localStorage.removeItem('currentUser');
  }

  private addUserToStore(user: AuthentifiedUserResponse) {
    localStorage.setItem('currentUser', user.username);
  }
}
