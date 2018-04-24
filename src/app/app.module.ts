import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderMycompanyComponent } from './header-mycompany/header-mycompany.component';
import { MainWelcomeComponent } from './main-welcome/main-welcome.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { MainTeamComponent } from './main-team/main-team.component';
import { MainServicesComponent } from './main-services/main-services.component';
import { MainClientsComponent } from './main-clients/main-clients.component';
import { MainTestimonialsComponent } from './main-testimonials/main-testimonials.component';
import { MainWorkComponent } from './main-work/main-work.component';
import { MainContactUsComponent } from './main-contact-us/main-contact-us.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";

const routes = [
  {path: '', component: MainWelcomeComponent},
  {path: 'services', component: MainServicesComponent },
  {path: 'portfolio', component: MainWorkComponent },
  {path: 'testimonials', component: MainTestimonialsComponent },
  {path: 'contacts', component: MainContactUsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderMycompanyComponent,
    MainWelcomeComponent,
    MainAboutComponent,
    MainTeamComponent,
    MainServicesComponent,
    MainClientsComponent,
    MainTestimonialsComponent,
    MainWorkComponent,
    MainContactUsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
