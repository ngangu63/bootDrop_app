import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YoutubeComponent } from './youtube/youtube.component';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ROIComponent } from './roi/roi.component';
import { StatusComponent } from './status/status.component';
import { ContactComponent } from './contact/contact.component';
import { FinanceComponent } from './finance/finance.component';
import { LesDirigeantsComponent } from './les-dirigeants/les-dirigeants.component';
import { OthersMembersComponent } from './others-members/others-members.component';
import { DeclIntentionComponent } from './decl-intention/decl-intention.component';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Accueil', component: HomeComponent },
  { path: 'LesDirigeants', component: LesDirigeantsComponent },
  { path: 'TousLesMembres', component: OthersMembersComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Finance', component: FinanceComponent },
  { path: 'Jesus1/:videoId', component: YoutubeComponent },
  { path: 'Jesus2/:videoId', component: YoutubeComponent },
  { path: 'Kelya/:videoId', component: YoutubeComponent },
  { path: 'Mikolo/:videoId', component: YoutubeComponent },
  { path: 'Longo/:videoId', component: YoutubeComponent },
  { path: 'Souvenir1/:videoId', component: YoutubeComponent },
  { path: 'Souvenir2/:videoId', component: YoutubeComponent },
  { path: 'Souvenir3/:videoId', component: YoutubeComponent },
  { path: 'Souvenir4/:videoId', component: YoutubeComponent },
  { path: 'Messages', component: MessagesComponent },
  { path: 'ROI', component: ROIComponent },
  { path: 'Status', component: StatusComponent },
  { path: 'Intention', component: DeclIntentionComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
