import { Routes } from '@angular/router';
import { ReservationComponent } from './reservation/reservation.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];
