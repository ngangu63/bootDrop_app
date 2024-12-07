import { Component } from '@angular/core';
import { Mp3PlayerComponent } from "../mp3-player/mp3-player.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Mp3PlayerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
