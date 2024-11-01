import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from "./myfooter/myfooter.component";
import { RouterModule } from '@angular/router';
import { OthersMembersComponent } from './others-members/others-members.component';
import { CommonModule } from '@angular/common';
import { LesDirigeantsComponent } from './les-dirigeants/les-dirigeants.component';
import { BigPicture } from './big-picture';
import { BigPictureService } from './big-picture.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyfooterComponent, RouterModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myDropDown-app';
  isSearchEnabled: boolean = false;
 
  toggleSearch(enable: boolean) {
    this.isSearchEnabled = enable;
  }


  onChildActivate(componentRef: any) {
    // Enable search only for certain child components
    this.isSearchEnabled = componentRef instanceof LesDirigeantsComponent || componentRef instanceof OthersMembersComponent;
    console.log(this.isSearchEnabled);
  }
}
