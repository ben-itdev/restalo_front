import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { SearchRestaurantsRequest } from 'src/app/services/api/requests/searchrestaurantsrequest';
import { SearchRestaurantResponse } from 'src/app/services/api/responses/restaurantresponse';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  name: string = '';
  restaurants: Array<SearchRestaurantResponse> = [];
  timePickerFormat: number = 24;
  timeFrom: string = '';
  timeTo: string = '';

  constructor(private apiService : ApiService) {}

  ngOnInit(): void {}

  searchRestaurants() {
    let params: SearchRestaurantsRequest = {};

    if (this.name !== '')
      params.name = this.name;
    if (this.timeFrom !== '') {
      if (params.opened === undefined)
        params.opened = {};
      params.opened.from = `${this.timeFrom}:00`;
    }
    if (this.timeTo !== '') {
      if (params.opened === undefined)
        params.opened = {};
      params.opened.to = `${this.timeTo}:00`;
    }

    this.apiService.searchRestaurants(params)
      .subscribe(response => {
        this.restaurants = response;
      });
  }
}
