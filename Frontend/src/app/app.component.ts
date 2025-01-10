import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent],  
  template: `
    <app-user-list></app-user-list>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'frontend';
}