import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigPicture } from '../big-picture';
import { BigPictureService } from '../big-picture.service';

@Component({
  selector: 'app-les-dirigeants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './les-dirigeants.component.html',
  styleUrl: './les-dirigeants.component.css'
})
export class LesDirigeantsComponent implements OnInit {
 
  pictures: BigPicture[] = [];
  numberpicture = 3;
  modalPicture: string ="";
  personName: string ="";
  message: string ="";

  constructor(private pictureService: BigPictureService) { }

  ngOnInit(): void {
    // Get the entire array of Pictures
    this.pictures = this.pictureService.getBigPictures();
    this.getDirigeantMemberPicture(this.pictures);

  }

  currentSlideIndex = 0;


  getDirigeantMemberPicture(pictures: BigPicture[]) {
    let Mypictures: BigPicture[] = [];
    for (let i = 0; i < pictures.length; i++) {
      if (pictures[i].role) Mypictures.push(pictures[i]);
    }
    this.pictures = Mypictures;
  }


  get currentPictures(): BigPicture[] {
    const start = this.currentSlideIndex * this.numberpicture;
    return this.pictures.slice(start, start + this.numberpicture);
  }

  nextSlide() {
    if ((this.currentSlideIndex + 1) * this.numberpicture < this.pictures.length) {
      this.currentSlideIndex++;
    }
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }



  openPicture(picture: BigPicture): void {
    const modelDiv = document.getElementById('myModal');
    this.modalPicture=picture.imageUrl;
    this.personName=picture.name;
    this.message=picture.message;
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }

  }

  CloseModel() {
    const modelDiv = document.getElementById('myModal');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
