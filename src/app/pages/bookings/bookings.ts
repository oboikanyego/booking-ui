import { Component } from '@angular/core';
import { BookingService } from '../../services/booking';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AbstractControl,
  ControlValueAccessor,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    CommonModule,
  ],
  templateUrl: './bookings.html',
  styleUrls: ['./bookings.scss'],
})
export class Bookings {
  bookings: any[] = [];
  form: any = {};

  constructor(private bookingService: BookingService) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.bookingService.getBookings().subscribe((res: any) => {
      this.bookings = res;
    });
  }

  create() {
    this.bookingService.createBooking(this.form).subscribe(() => {
      this.load();
      this.form = {};
    });
  }
}
