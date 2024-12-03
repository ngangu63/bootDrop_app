import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyfooterComponent } from "./myfooter/myfooter.component";
import { RouterModule } from '@angular/router';
import { OthersMembersComponent } from './others-members/others-members.component';
import { CommonModule } from '@angular/common';
import { LesDirigeantsComponent } from './les-dirigeants/les-dirigeants.component';
import { BigPicture } from './big-picture';
import { BigPictureService } from './big-picture.service';
import { FormsModule } from '@angular/forms';
import { Observable, of } from 'rxjs';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyfooterComponent, RouterModule, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {


  title = 'myDropDown-app';
  isSearchEnabled: boolean = false;
  searchQuery: string ="";
  searchResults: BigPicture[] = [];

  modalPicture: string ="";
  message: string ="";
  personName: string ="";


  constructor(private pictureService: BigPictureService) { }


  toggleSearch(enable: boolean) {
    this.isSearchEnabled = enable;
  }


  onChildActivate(componentRef: any) {
    // Enable search only for certain child components
    this.isSearchEnabled = componentRef instanceof LesDirigeantsComponent || componentRef instanceof OthersMembersComponent;
  
  }

  onSearch(): void{
   
    if (this.searchQuery.trim()) {
    this.searchResults= this.pictureService.getBigPictureByName(this.searchQuery);  
  
    }
    this.modalPicture=this.searchResults[0].imageUrl;
    this.message=this.searchResults[0].message;
    this.personName=this.searchResults[0].name ; 

    //console.log(this.searchResults);
  }
  

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}