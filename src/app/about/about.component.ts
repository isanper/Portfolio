import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  letters: any[] = ['I','s','m','a','e','l',' ','S','a','n','t','a','n','a',' ','P','é','r','e','z'];
  socialMedia: any[] = [
    {
      "type": "facebook",
      "me": "https://facebook.com"
    },
    {
      "type": "twitter",
      "me": "https://twitter.com"
    },
    {
      "type": "linkedin",
      "me": "https://linkedin.com"
    }
  ]

  mouseEnter(event){
    this.renderer.addClass(event.target, 'animated');
    this.renderer.addClass(event.target, 'rubberBand');
    setTimeout(() => {
      this.renderer.removeClass(event.target, 'animated');
      this.renderer.removeClass(event.target, 'rubberBand');
    }, 1500);
 }
}
