import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    TimelineComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AnimateOnScrollModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAjkJoVhHOIGjBZoLEecu7RFJImElva_Dk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
