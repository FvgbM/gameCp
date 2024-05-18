import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DonationComponent } from './donation/donation.component';
import { GuiaComponent } from './guia/guia.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DownloadComponent } from './download/download.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'donation', component:DonationComponent},
  {path: 'guia', component:GuiaComponent},
  {path: 'header', component:HeaderComponent},
  {path: 'download', component:DownloadComponent},
  {path: 'home', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
