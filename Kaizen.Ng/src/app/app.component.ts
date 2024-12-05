import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})

export class AppComponent {
  users : User[] = [{id : 1, email : "email@email", "password" : "password"}];
  title = 'kaizen';
}
