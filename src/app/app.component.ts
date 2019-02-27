import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'security-front';
  greeting = {};
  constructor(private http: HttpClient) {
    http.get('api/greeting').subscribe(data => this.greeting = data);
  }
}
