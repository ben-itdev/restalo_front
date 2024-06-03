import { RouterModule, Routes } from '@angular/router';
import { ReservationComponent } from './components/reservation/reservation.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/pagenotfound/pagenotfound.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'reservation', component: ReservationComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: '',   redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
