import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo!:string;

  constructor() { }

  ngOnInit(): void {
    this.logo = 'http://assets.stickpng.com/images/5b06c174fad1cae04539afdb.png';
  }

}
