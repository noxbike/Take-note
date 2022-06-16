import { Component, Input, OnInit } from '@angular/core';
import { TakeNot } from '../model/note.model';
import { TakeNoteService } from '../service/take-note.service';

@Component({
  selector: 'app-list-note',
  templateUrl: './list-note.component.html',
  styleUrls: ['./list-note.component.scss']
})
export class ListNoteComponent implements OnInit {

  constructor(
    private takeNoteService: TakeNoteService
  ) {}

  listOfNotes!: TakeNot[];

  ngOnInit(): void {
    this.listOfNotes = this.takeNoteService.getAllNote();
  }

}
