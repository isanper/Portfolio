import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  lat: number = 51.678418;
  lng: number = 7.809007;
  letters: any[] = ['C','o','n','t','a','c','t',' ','M','e'];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  mouseEnter(event){
    this.renderer.addClass(event.target, 'animated');
    this.renderer.addClass(event.target, 'rubberBand');
    setTimeout(() => {
      this.renderer.removeClass(event.target, 'animated');
      this.renderer.removeClass(event.target, 'rubberBand');
    }, 1500);
 }

}
