import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { TakeNot } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class TakeNoteService {

  constructor() { }
  singleNote!:any;

  listNote: TakeNot[] = [
    {
      id: 1,
      title: 'Give a paper to the administration',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      createdDate: new Date(),
      priority: '255, 0, 0',
    },
    {
      id: 2,
      title: 'Learn Javascript ',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elitdsdd...',
      createdDate: new Date(),
      priority: '0, 128, 0',
    },
    {
      id: 3,
      title: 'Make a project with HTML, CSS and Javascript',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      createdDate: new Date(),
      priority: '255, 0, 0',
    },
    {
      id: 4,
      title: 'Appointment with the doctor tomorrow',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit..',
      createdDate: new Date(),
      priority: '0, 0, 255',
    }
  ]

  createNote(formValue: {title: string, description: string, priority: string}){
    this.listNote.push({...formValue, id:this.listNote.length + 1, createdDate: new Date()});
  }

  getNoteById(singleNoteId: number) {
    const note = this.listNote.find(note => note.id === singleNoteId);
    if(!note)
      throw new Error('note not found');
    else
      return note;
  }

  getAllNote() {
    return this.listNote
  }

  updateSingleNote(formValue: {id: number, title: string, description: string, createdDate: Date, priority: string}) {
    this.listNote[formValue.id - 1] = { ...formValue } ;
  }
}
