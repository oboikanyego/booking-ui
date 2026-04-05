import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  api = 'http://localhost:5000/api/bookings';

  constructor(private http: HttpClient) {}

  getBookings() {
    return this.http.get(this.api);
  }

  createBooking(data: any) {
    return this.http.post(this.api, data);
  }
}
