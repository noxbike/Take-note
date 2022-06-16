import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TakeNot } from '../model/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  @Input() note!:TakeNot;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onView(noteId: number){
    this.router.navigateByUrl(`/${noteId}`)
  }

  updateForm(noteId: number){
    this.router.navigateByUrl(`update/${noteId}`)
  }

}
