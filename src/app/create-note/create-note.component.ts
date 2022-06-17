import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TakeNoteService } from '../service/take-note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  constructor(
    private takeNoteService: TakeNoteService,
    private formBuilder: FormBuilder,
  ) { }

  noteForm!: FormGroup;
  showForm!: boolean;

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      title: [null],
      description: [null],
      priority: [null]
    })
    this.showForm = false;
  }

  onCreate(){
    this.showForm = true;
  }

  onSubmitForm(){
    this.takeNoteService.createNote(this.noteForm.value)
    console.log(this.noteForm.value)
    this.noteForm = this.formBuilder.group({
      title: [null],
      description: [null],
      priority: [null],
    })
    this.showForm = false;
  }

  close(){
    this.noteForm = this.formBuilder.group({
      title: [null],
      description: [null],
      priority: [null],
    })
    this.showForm = false;
  }

}
