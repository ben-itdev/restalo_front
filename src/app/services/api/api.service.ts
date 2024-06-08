import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { HealthResponse } from './responses/health.response';
import { SearchRestaurantResponse } from './responses/searchrestaurant.response';
import { SearchRestaurantsRequest } from './requests/searchrestaurants.request';
import { CreateRestaurantRequest } from './requests/createrestaurant.request';
import { CreateRestaurant } from './objects/createrestaurant';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  isConnected(): Observable<boolean> {
    let subject = new Subject<boolean>();

    this.http.get<HealthResponse>(ApiService.HEALTH_ENDPOINT)
      .subscribe(response => {
        subject.next(response.status === ApiService.HEALTH_OK_STATUS);
      });

    return subject.asObservable();
  }

  createRestaurant(params: CreateRestaurant): Observable<boolean> {
    let subject = new Subject<boolean>();
    let body: CreateRestaurantRequest = {
      name: params.name,
      capacity: params.capacity,
      hours: params.hours,
      reservations: params.reservations
    };

    this.http.post(ApiService.RESTAURANT_ENDPOINT, body, {
        headers: new HttpHeaders({
        'owner': params.owner
      })})
      .subscribe(response => {
        subject.next(true);
      });

    return subject.asObservable();
  }

  searchRestaurants(params: SearchRestaurantsRequest): Observable<Array<SearchRestaurantResponse>> {
    return this.http.post<Array<SearchRestaurantResponse>>(ApiService.SEARCH_RESTAURANTS_ENDPOINT, params);
  }

  static HEALTH_ENDPOINT: string = `${environment.apiUrl}/health`;
  static RESTAURANT_ENDPOINT: string = `${environment.apiUrl}/restaurants`;
  static SEARCH_RESTAURANTS_ENDPOINT: string = `${environment.apiUrl}/search/restaurants`;
  static HEALTH_OK_STATUS: string = 'ok';
}
