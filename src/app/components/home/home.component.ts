import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  connected: boolean = false;

  constructor(private apiService: ApiService) {}

  isConnected() {
    this.apiService.isConnected()
      .subscribe(bool => {
        this.connected = bool;
      })
  }

  ngOnInit(): void {
    this.isConnected();
  }
}
