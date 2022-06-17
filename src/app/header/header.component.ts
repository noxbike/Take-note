import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo!:string;

  constructor(
    private router:Router,
  ) { }

  ngOnInit(): void {
    this.logo = 'http://assets.stickpng.com/images/5b06c174fad1cae04539afdb.png';
  }

  home(){
    this.router.navigateByUrl('');
  }

}
