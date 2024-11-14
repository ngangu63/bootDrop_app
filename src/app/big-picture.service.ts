import { Injectable } from '@angular/core';
import { BigPicture } from './big-picture';

@Injectable({
  providedIn: 'root'
})
export class BigPictureService {

  constructor() { }

  private bigPictures: BigPicture[] = [
    { name: 'Remy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/EugenieMalayi.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/Pascal5Mieluzeyi.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Germaine Nsenga', role: '', location: 'France', imageUrl: 'assets/images/NsengaGermaine.jpeg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Royaume-Uni', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Coco Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Niko J T Bubuzi', role: 'Conseiller , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'DR Congo', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },


    { name: 'Marcelline Mboyi', role: '', location: 'Angletere', imageUrl: 'assets/images/membres/Marceline1Mboyi.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Clémentine Buaka', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Constant Lutonda', role: '', location: 'Brésil', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Dally Mvemba', role: 'Conseiller', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Darry', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: "Houmba Dezai N'Accompa", role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Dieu Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Donat Bitazi', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Emma Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Felicien Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Françoise Mankuika', role: '', location: 'Angleterre', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Gina Kiaku ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Johnson Tamba ', role: '', location: 'Afrique du Sud', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Joscky Wasukama ', role: 'Conseiller', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Justin ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Lipasa Olivier', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Luza Charlotte', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Malu', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Marie Landu', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Mfumu Buala', role: '', location: 'Belgique', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Fuakuingi Every', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Néné Kubanza', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Niorra Ntonzi', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nzayambela', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nzuzi Mvula', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Piff Bitazi', role: '', location: 'Angletere', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rachel Bakala', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rose', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Rose Mankuika', role: '', location: 'Angletere', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Soukouma Lipasa ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Valentin Kitemoko ', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Willy Mieluzeye', role: '', location: 'Irlande', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Zoumack Mafuila  ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Nicole', role: '', location: 'Angletere', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Adrien Ngudiankama', role: '', location: 'États - Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Alex Diandimba', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Alpha Nsimba', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Arsène Mpls', role: '', location: 'Angleterre', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Bona Kiaku', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Bulay', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Glody Ngeyitala ', role: '', location: 'États - Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Edo Makobokele', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Aisé Ngeyitala ', role: '', location: 'États - Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg' },
    { name: 'Ma Maguy', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg' },



  ];



  // Method to return the entire array of Pictures
  getBigPictures(): BigPicture[] {
    return this.bigPictures;
  }

  // Method to return a Picture by name
  getBigPictureByName(name: string): BigPicture | undefined {
    return this.bigPictures.find(picture => picture.name.toLowerCase().includes(name.toLowerCase()));
  }

  // Method to return a Picture by array index
  getBigPictureByIndex(index: number): BigPicture | undefined {
    return this.bigPictures[index];
  }
}
