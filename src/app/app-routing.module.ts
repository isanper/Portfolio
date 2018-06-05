import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineComponent } from './timeline/timeline.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { page: 'about' } },
  { path: 'experience', component: TimelineComponent, data: { page: 'experience' } },
  { path: 'contact', component: ContactComponent, data: { page: 'contact' } },
  { path: '**', redirectTo: 'about' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
