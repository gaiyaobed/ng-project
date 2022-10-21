import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor() { }
error = ''
  user = {
    email: 'test@gmail.com',
    password: '123456'
  }

  handleSubmit (form: any) {
    if (form.password !== this.user.password || form.email !== this.user.email) {
      this.error = 'Invalid cred'
      console.log('ddd')
    }
  }

  isAuthenticated(): boolean {
    return true
  }
}
