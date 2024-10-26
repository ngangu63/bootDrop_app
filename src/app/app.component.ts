import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from "./myfooter/myfooter.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyfooterComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myDropDown-app';
}
