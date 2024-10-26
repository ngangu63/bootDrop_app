import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Accueil', component: HomeComponent },
  { path: 'Jesus/:videoId', component: YoutubeComponent },
  { path: 'Jeunesse/:videoId', component: YoutubeComponent },
  { path: 'Mikolo/:videoId', component: YoutubeComponent },
  { path: 'Messages', component: MessagesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }



  //{path: '', redirectTo: 'Accueil', pathMatch: 'full'},
/*   { path: 'Accueil', component: HomeComponent },
  { path: 'Documetation', component: DocumentationComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Finance', component: ExcelReaderComponent },
  { path: 'PhotoDesmembres', component: PictureSliderComponent },
  { path: 'Projects', component: ProjectsComponent },
  { path: 'PlanStrategique', component: PdfFileComponent },
  { path: 'OrdreInterieur', component: OrdreInterieurComponent },
  { path: 'Messages', component: MessagesComponent }, */
/*   { path: 'video1/:CDNXNaJ1eQw', component: YoutubeEmbedComponent }, 
  { path: 'video2/:VpvDSz8skb8', component: YoutubeEmbedComponent },  */
/*   { path: 'video1', component: YoutubeEmbedComponent }, 
  { path: 'video2', component: YoutubeEmbedComponent },  */
/*   { path: 'divers/:videoId', component: YoutubeEmbedComponent },   
  { path: 'musique/:videoId', component: YoutubeEmbedComponent },   
  { path: 'jeune/:videoId', component: YoutubeEmbedComponent },   
  { path: 'yisu/:videoId', component: YoutubeEmbedComponent }, */
///jeune //yisu