import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public title: string;
  public subTitle: string;
  public email: string;

  constructor() {
    this.title = 'Ozzy';
    this.subTitle = 'Desarllo con angular';
    this.email = 'ozzy@gmail.com';
  }

  ngOnInit(): void {
  }

}
