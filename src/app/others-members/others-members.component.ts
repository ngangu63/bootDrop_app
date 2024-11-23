import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BigPicture } from '../big-picture';
import { BigPictureService } from '../big-picture.service';

@Component({
  selector: 'app-others-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others-members.component.html',
  styleUrl: './others-members.component.css'
})
export class OthersMembersComponent implements OnInit {

  pictures: BigPicture[] = [];
  numberpicture = 3;
  modalPicture: string = "";
  personName: string = "";
  message: string = "";

  constructor(private pictureService: BigPictureService) { }

  ngOnInit(): void {
    // Get the entire array of Pictures
    this.pictures = this.pictureService.getBigPictures();
    this.getMemberPicture(this.pictures);

  }

  currentSlideIndex = 0;

  get currentPictures(): BigPicture[] {
    const start = this.currentSlideIndex * this.numberpicture;
    return this.pictures.slice(start, start + this.numberpicture);
  }

  getMemberPicture(pictures: BigPicture[]) {
    let Mypictures: BigPicture[] = [];
    for (let i = 0; i < pictures.length; i++) {
      if (!pictures[i].role) Mypictures.push(pictures[i]);
    }
    this.pictures = Mypictures;
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

  /*   openPicture(picture: BigPicture): void {
      const popup = window.open('', '_blank', 'width=400,height=400');
      if (popup) {
        popup.document.write(`
          <html>
            <head>
              <title>${picture.name}</title>
              <style>
                body { font-family: Arial, sans-serif; text-align: center; }
                img { width: 100%; height: auto; }
              </style>
            </head>
            <body>
              <h2>${picture.name}</h2>
              <p>Role: ${picture.role}</p>
              <p>Location: ${picture.location}</p>
              <img src="${picture.imageUrl}" alt="${picture.name}" />
            </body>
          </html>
        `);
        popup.document.close();
      } */

  openPicture(picture: BigPicture): void {
    const modelDiv = document.getElementById('myModal');
    this.modalPicture = picture.imageUrl;
    this.personName = picture.name;
    this.message = picture.message;
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



