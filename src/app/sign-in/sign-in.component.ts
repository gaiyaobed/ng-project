import { Component, OnInit } from '@angular/core';
import {SignInService} from "./sign-in.service";
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
title = "Login"
  constructor(private readonly signInService: SignInService) { }

  ngOnInit(): void {
  }
   form: any = {
    email: '',
    password: ''
}

  email = new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]);

  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required';
    }
    if (this.email.hasError('minLength')) {
      return 'Email lenght';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  handleSubmit () {
    return this.signInService.handleSubmit(this.form)
  }
}
