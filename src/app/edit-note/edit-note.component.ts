import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TakeNot } from '../model/note.model';
import { TakeNoteService } from '../service/take-note.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private takeNoteService: TakeNoteService,
    private formBuilder: FormBuilder,
  ) { }
  noteForm!: FormGroup;
  takeNot!:TakeNot
  note!:any;

  ngOnInit(): void {
    const noteId = +this.route.snapshot.params['id'];
    this.note = this.takeNoteService.getNoteById(noteId);
    this.noteForm = this.formBuilder.group({
      id: [this.note.id],
      title:[this.note.title],
      description: [this.note.description],
      priority: [this.note.priority],
      createdDate: [this.note.createdDate]
    })
  }

  onUpdate(){
    this.takeNoteService.updateSingleNote(this.noteForm.value);
    this.router.navigateByUrl('');
  }

  close(){
    this.router.navigateByUrl('');
  }

}
