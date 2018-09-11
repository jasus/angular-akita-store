import { Component, OnInit, NgZone } from '@angular/core';
import { environment } from '../environments/environment';
import { akitaDevtools } from '@datorama/akita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-akita-store';

  constructor(private ngZone: NgZone) {
    if (!environment.production) {
      akitaDevtools(ngZone);
    }
  }

  ngOnInit(): void {
  }
}
