import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-mini-fab',
  templateUrl: './round-mini-fab.component.html',
  styleUrls: ['./round-mini-fab.component.scss']
})
export class RoundMiniFabComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
