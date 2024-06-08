import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateRestaurant } from 'src/app/services/api/objects/createrestaurant';
import { CreateRestaurantRequest } from 'src/app/services/api/requests/createrestaurant.request';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {
  name: string = '';
  owner: string = '';
  capacity: number = 0;
  minCapacity: string = '0';
  maxCapacity: string = '15';
  openHour: string = '';
  closeHour: string = '';
  timePickerFormat: number = 24;
  reservationDuration: number = 60;
  minReservationDuration: string = '15';
  maxReservationDuration: string = '120';

  constructor(
    public dialogRef: MatDialogRef<CreateRestaurantComponent>,
  ) { }

  ngOnInit(): void { }

  onCancel(): void {
    this.dialogRef.close();
  }

  toCreateRestaurant(): CreateRestaurant {
    return {
      name: this.name,
      owner: this.owner,
      capacity: this.capacity,
      hours: {
        open: this.openHour,
        close: this.closeHour
      },
      reservations: {
        duration: this.reservationDuration
      }
    };
  }
}
