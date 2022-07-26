import { BookingComponent } from './booking/booking.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path:'booking', component: BookingComponent
  },
  {
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
