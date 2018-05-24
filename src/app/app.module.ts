import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { TimelineComponent } from './timeline/timeline.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CabeceraComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    AnimateOnScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
