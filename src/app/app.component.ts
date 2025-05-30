/*
Kylie Brown
*/

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class AppComponent {
  title = 'everyday-market-app';
}
