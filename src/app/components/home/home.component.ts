import { Component, OnInit } from '@angular/core';
import { BeerInterface } from '../../Models/Beer-Interface';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataApi: DataApiService) {
  }
  private beers: BeerInterface;
  ngOnInit() {
    this.getListBeers();
  }
getListBeers() {
}
}
