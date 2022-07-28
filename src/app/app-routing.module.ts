import { CreateBookingComponent } from './create-booking/create-booking.component';
import { BookingComponent } from './booking/booking.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'booking', component: BookingComponent
  },
  {
    path:'create', component: CreateBookingComponent
  },
  {
    path:'edit/:id', component: CreateBookingComponent
  },
  {
    // ist eine Umleitung auf 'bokking' wenn Pfad leer ist
    path:'', redirectTo:'booking', pathMatch:'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
