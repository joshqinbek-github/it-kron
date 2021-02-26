import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  admin = new BehaviorSubject(null);


  constructor(private http: HttpClient) { }


  loginAdmin(email: string, password: string){
  return  this.http.post("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBgdYxO7NNKVooNxtECdeYsPvH_J06QNnA",
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }

}
