import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent {
  login :boolean = true;
  email :string = "";
  password:string = "";
  
  constructor(private http: HttpClient) { }
  logStatus(): void {
    this.login = !this.login;
  }

  Login(): void{
    this.http.get<any>('localhost:3000/users');
  }

  SignIn(): void{
    this.http.post<any>('localhost:3000/users', { email:this.email, password:this.password});
  }
}
