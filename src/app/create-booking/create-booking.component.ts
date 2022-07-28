import { Router } from '@angular/router';
import { Bookings } from './../mock-booking';
import { Booking } from './../booking';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css']
})
export class CreateBookingComponent implements OnInit {

  constructor(private router: Router) { }

  booking: Booking={
    id: 101,
    name: 'your Name',
    roomnumber: 100,
    checkIn: new Date(),
    checkOut: new Date()
  }

  ngOnInit(): void {
  }

  save():void{
    Bookings.push(this.booking);
    this.router.navigate(['booking']);
  }

  abort():void{
    this.router.navigate(['booking']);
  }

}
