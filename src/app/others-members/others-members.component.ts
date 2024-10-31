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
  selector: 'app-others-members',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './others-members.component.html',
  styleUrl: './others-members.component.css'
})
export class OthersMembersComponent {

  numberpicture = 4;

  pictures: Picture[] = [


    { name: 'Clémentine Buaka', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Constant Lutonda', role: 'Conseiller , ', location: 'Brésil', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Dally Mvemba', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Darry', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: "Dezai N'accompa", role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Dieu Kindomba', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Donat Bitazi', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Emma kindomba', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Felicien kindomba', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Françoise Mankuika', role: 'Conseiller , ', location: 'Angleterre', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Gina Kiaku ', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Johnson Tamba ', role: 'Conseiller , ', location: 'Afrique du Sud', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Joscky Wasukama ', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Justin ', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Lipasa Olivier', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Luza Charlotte', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Malu', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Germaine Nsenga', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Marie Landu', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Mfumu Buala', role: 'Conseiller , ', location: 'Belgique', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Fuakuingi Every', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Néné Kubanza', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Niorra Ntonzi', role: 'Conseiller , ', location: 'Canada', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nzayambela', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nzuzi Mvula', role: 'Conseiller , ', location: 'Allemagne', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Piff Bitazi', role: 'Conseiller , ', location: 'Angletere', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rachel Bakala', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rose', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rose Mankuika', role: 'Conseiller , ', location: 'Angletere', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Soukouma Lipasa ', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Valentin Kitemoko ', role: 'Conseiller , ', location: 'Allemagne', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Willy Mieluzeye', role: 'Conseiller , ', location: 'Irlande', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Zoumack Mafuila  ', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Marcelline', role: 'Conseiller , ', location: 'Angletere', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nicole', role: 'Conseiller , ', location: 'Angletere', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Adrien Ngudiankama', role: 'Conseiller , ', location: 'États - Unis', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Alex Diandimba', role: 'Conseiller , ', location: 'Canada', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Alpha Nsimba', role: 'Conseiller , ', location: 'Allemagne', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Arsène Mpls', role: 'Conseiller , ', location: 'Angleterre', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Bona Kiaku', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Bulay', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Glody Ngeyitala ', role: 'Conseiller , ', location: 'États - Unis', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Edo Makobokele', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Aisé Ngeyitala ', role: 'Conseiller , ', location: 'États - Unis', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Ma Maguy', role: 'Conseiller , ', location: 'France', imageUrl: '', defaultImage: 'assets/images/Remy_Cravate1.jpg' },

  ];



  currentSlideIndex = 0;

  get currentPictures(): Picture[] {
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
