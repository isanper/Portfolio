import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showmenu = false;
  showsocial = false;
  numClicks = 0;
  elementSelected: string = "";

  showDesc(element: string) {
    this.numClicks++;
    if(this.numClicks === 1){
      this.elementSelected = element;
    }else if(this.numClicks === 2 && element == this.elementSelected){
      console.log(this.elementSelected)
      console.log(element)
      console.log('Segundo click')
      this.numClicks = 0;
    }else{
      this.numClicks = 0;
      this.elementSelected = "";
    }
  }
}
