import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { LandingComponent } from './landing/landing.component';
import { ServicesComponent } from './services/services.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

import { MailService } from './mail.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatTabsModule} from '@angular/material/tabs';
import { OverlayModule } from '@angular/cdk/overlay';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { QualificationsComponent } from './qualifications/qualifications.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent,
    ServicesComponent,
    ReviewsComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    PortfolioComponent,
    QualificationsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RecaptchaModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatTabsModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatButtonModule,
    OverlayModule,
    NgbModule
  ],
  providers: [MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
