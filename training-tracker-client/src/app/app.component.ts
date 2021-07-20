import { Component } from '@angular/core';
import {DefaultService} from 'training-tracker-sdk-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'training-tracker-client';

  constructor(private service: DefaultService) {
  }

  logUsers(): void {
    this.service.getUsers().subscribe((res) => {
      console.log(res);
    })
  }
}
