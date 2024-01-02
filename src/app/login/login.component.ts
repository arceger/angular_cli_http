import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 

  email: string ="";
  password: string ="";


  constructor(private router: Router,private http: HttpClient) {}
 


  Login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.http.post(`${environment.apiHost}/api/login`, bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);
 
        if (resultData.message != "Login Success")
        {
          alert("Login Failue");
        }
        else
         {
          this.router.navigateByUrl('/home');
        }

      });
    }

}