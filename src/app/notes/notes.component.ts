import { Component, Input, OnInit } from '@angular/core';
import { TakeNot } from '../model/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() note!:TakeNot;
  constructor() { }

  ngOnInit(): void {
  }

}
