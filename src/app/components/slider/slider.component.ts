import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

declare var $: any;
declare var jquery: any;
@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  @Input() anchura!: number;
  @Input('etiquetas') captions!: boolean;
  @Output() conseguirAutor = new EventEmitter();
  public autor: any;

  constructor() {
    this.autor = {
      name: "Oz",
      age: "22",
      country: "Canada"
    };
  }

  ngOnInit(): void {
    $(".logo").click(function (e: any) {
      e.preventDefault();
      $("header")
        .css("background", "green")
        .css("height", "50px");
    });

    $('.gallery').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura
    });
  }

  launch(e: any) {
    console.log(e);
    this.conseguirAutor.emit(this.autor);
  }

}
