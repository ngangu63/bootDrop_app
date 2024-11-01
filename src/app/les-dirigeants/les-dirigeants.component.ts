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
  numberpicture = 4;

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
    }
  }
}
