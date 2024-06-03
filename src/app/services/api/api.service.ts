import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs/internal/Observable';
import { Subject } from 'rxjs/internal/Subject';
import { HealthResponse } from './responses/healthresponse';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  isConnected(): Observable<boolean> {
    let subject = new Subject<boolean>();

    this.http.get<HealthResponse>(ApiService.HEALTH_ENDPOINT)
      .subscribe(response => {
        console.log(response);
        subject.next(response.status === ApiService.HEALTH_OK_STATUS);
      });

    return subject.asObservable();
  }

  static HEALTH_ENDPOINT: string = `${environment.apiUrl}/health`;
  static HEALTH_OK_STATUS: string = 'ok';
}
