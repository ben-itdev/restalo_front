import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api/api.service';
import { SearchRestaurantsRequest } from 'src/app/services/api/requests/searchrestaurants.request';
import { SearchRestaurantResponse } from 'src/app/services/api/responses/searchrestaurant.response';
import { CreateRestaurantComponent } from '../createrestaurant/createrestaurant.component';
import { CreateRestaurantRequest } from 'src/app/services/api/requests/createrestaurant.request';
import { CreateRestaurant } from 'src/app/services/api/objects/createrestaurant';

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

  constructor(private apiService : ApiService, public dialog: MatDialog) {}

  ngOnInit(): void {}

  searchRestaurants(): void {
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

  showCreateRestaurantForm(): void {
    const dialogRef = this.dialog.open(CreateRestaurantComponent, {
      width: "50%"
    });

    dialogRef.afterClosed()
      .subscribe((result: CreateRestaurant) => {
        if (result !== undefined)
          this.apiService.createRestaurant(result);
      });
  }
}
