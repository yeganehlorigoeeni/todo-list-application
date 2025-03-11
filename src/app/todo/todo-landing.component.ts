import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-landing',
  imports: [RouterOutlet,RouterLink],
  templateUrl: './todo-landing.component.html',
  styleUrl: './todo-landing.component.css'
})
export class TodoLandingComponent {

}
