 import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

import { BeerInterface } from '../Models/Beer-Interface';
import { UserInterface } from '../Models/Users-Interface';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor( private http: HttpClient) { }



}
