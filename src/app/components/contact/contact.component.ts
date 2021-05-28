import { Component, OnInit, ViewChild } from '@angular/core';
// import * as $ from 'jquery';
declare var $: any;
declare var jquery: any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public widthSlider!: number;
  public widthToSlider!: any;
  public captions: boolean;
  public autor: any;
  @ViewChild('textos', { static: true }) textos: any;

  constructor() {
    this.captions = true;
  }

  ngOnInit(): void {
    // var classicOption = document.querySelector('texto').innerHtml;
    // alert(classicOption)
    console.log(this.textos.nativeElement.textContent);
  }

  chargeSlider() {
    this.widthToSlider = null;
    this.widthToSlider = this.widthSlider;
  }

  resetSlider() {
    this.widthToSlider = false;
  }
  getAutor(e: any) {
    // console.log(e);
    this.autor = e;
  }
}
