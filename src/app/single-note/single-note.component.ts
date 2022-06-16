import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TakeNoteService } from '../service/take-note.service';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.scss']
})
export class SingleNoteComponent implements OnInit {

  constructor(
    private takeNoteService: TakeNoteService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }
  note!:any;


  ngOnInit(): void {
    const noteId = +this.route.snapshot.params['id']
    this.note = this.takeNoteService.getNoteById(noteId);
  }

  close(){
    this.router.navigateByUrl('')
  }
}
