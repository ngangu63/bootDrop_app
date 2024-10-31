import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Picture {
  name: string;
  role: string;
  location: string;
  imageUrl: string;
  defaultImage: string;
}


@Component({
  selector: 'app-les-dirigeants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './les-dirigeants.component.html',
  styleUrl: './les-dirigeants.component.css'
})
export class LesDirigeantsComponent {

  numberpicture = 4;

  pictures: Picture[] = [
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Royaume-Uni', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    // { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: '', defaultImage: 'assets/images/RoseFlour.jpeg' },
    { name: 'Coco Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Niko J T Bubuzi', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'DR Congo', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },




  ];
  


  currentSlideIndex = 0;

  get currentPictures(): Picture[] {
    const start = this.currentSlideIndex * this.numberpicture ;
    return this.pictures.slice(start, start + this.numberpicture );
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

  openPicture(picture: Picture): void {
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
