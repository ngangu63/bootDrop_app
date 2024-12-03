import { Injectable } from '@angular/core';
import { BigPicture } from './big-picture';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigPictureService {

  constructor() { }

  private bigPictures: BigPicture[] = [
    { name: 'Léopold Ngoma', role: 'Président , ', location: 'Angletere', imageUrl: 'assets/images/dirigeants/LeopoldNgoma.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rémy Miantezila', role: 'Conseiller , Webmaster ; ', location: 'États-Unis', imageUrl: 'assets/images/Remy_Cravate1.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: 'Software Engineer', message: 'I love you All', LinkedIn: 'https://www.linkedin.com/in/remy-miantezila-miabwa/' },
    { name: 'Eugenie Malayi', role: 'Trésorière , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/EugenieMalayi.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Pascal Mieluzeyi', role: 'Secrétaire , ', location: 'Canada', imageUrl: 'assets/images/dirigeants/Pascal5Mieluzeyi.jpg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Antoine Dede Kavungu', role: 'Vice-Président Europe , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Germaine Nsenga', role: '', location: 'France', imageUrl: 'assets/images/NsengaGermaine.jpeg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Junior Nzingu', role: 'Vice-Président Afrique , ', location: 'DR Congo', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Gerry Mabiala', role: 'Vice-Président Amerique , ', location: "États-Unis", imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Coco Mitouche', role: 'Commissaire aux comptes , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Daniel Meboya', role: 'Coordonnateur  , ', location: 'Ouganda', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Niko J T Bubuzi', role: 'Conseiller , ', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Mathieu Tusalamo', role: 'Conseiller , ', location: 'DR Congo', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Aisé Ngeyitala ', role: '', location: 'États - Unis', imageUrl: 'assets/images/membres/AiseMiantezila.jpeg', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },

    { name: 'Marcelline Mboyi', role: '', location: 'Angletere', imageUrl: 'assets/images/membres/Marceline1Mboyi.jpg', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Clémentine Buaka', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Constant Lutonda', role: '', location: 'Brésil', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Dally Mvemba', role: 'Conseiller', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Darry', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: "Houmba Dezai N'Accompa", role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Dieu Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Donat Bitazi', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Emma Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Felicien Kindomba', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Françoise Mankuika', role: '', location: 'Angleterre', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Gina Kiaku ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Jason Tamba ', role: '', location: 'Afrique du Sud', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Joscky Wasukama ', role: 'Conseiller', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Justin ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Lipasa Olivier', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Luza Charlotte', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Malu', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Marie Landu', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Mfumu Buala', role: '', location: 'Belgique', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Fuakuingi Every', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Néné Kubanza', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Niorra Ntonzi', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nzayambela', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nzuzi Mvula', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Piff Bitazi', role: '', location: 'Angletere', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rachel Bakala', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rose', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Rose Mankuika', role: '', location: 'Angletere', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Soukouma Lipasa ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Valentin Kitemoko ', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Willy Mieluzeye', role: '', location: 'Irlande', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Zoumack Mafuila  ', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Nicole', role: '', location: 'Angletere', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Adrien Ngudiankama', role: '', location: 'États - Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Alex Diandimba', role: '', location: 'Canada', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Alpha Nsimba', role: '', location: 'Allemagne', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Arsène Mpulusu', role: '', location: 'Angleterre', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Bona Kiaku', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Bulay', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Glody Ngeyitala ', role: '', location: 'États - Unis', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Edo Makobokele', role: '', location: 'France', imageUrl: '', gender: 1, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    { name: 'Ma Maguy', role: '', location: 'France', imageUrl: '', gender: 0, defaultImage: 'assets/images/Remy_Cravate1.jpg', profession: '', message: '', LinkedIn: '' },
    
  ];



  // Method to return the entire array of Pictures
  getBigPictures(): BigPicture[] {
    return this.bigPictures;
  }

  searchBigPictureByName(query: string): Observable<BigPicture[]|undefined> {
    const filteredNames = this.bigPictures.filter(picture=>
      picture.name.toLowerCase().includes(query.toLowerCase())
    );
    return of(filteredNames); // Simulating an API call
  }

  // Method to return a Picture by name
  getBigPictureByName(name: string): BigPicture[] {
    return this.bigPictures.filter(picture => picture.name.toLowerCase().includes(name.toLowerCase()));
  }




  // Method to return a Picture by array index
  getBigPictureByIndex(index: number): BigPicture | undefined {
    return this.bigPictures[index];
  }
}
