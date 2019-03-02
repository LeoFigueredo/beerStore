import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
// import { IsNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}
  registerUser() {}
  loginEmailUser() {}
  loginFacebookUser() {}
  loginGoogleUser() {}
  logOutUser() {}
}
