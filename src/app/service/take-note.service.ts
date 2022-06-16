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
      title: 'Make Take Note App',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      createdDate: new Date('21/05/2022'),
    },
    {
      id: 2,
      title: 'Make My Portfolio',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elitdsdd...',
      createdDate: new Date('21/05/2022'),
    },
    {
      id: 3,
      title: 'Learn Angular',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      createdDate: new Date('21/05/2022'),
    },
    {
      id: 4,
      title: 'Post on Instagram',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit..',
      createdDate: new Date('21/05/2022'),
    }
  ]

  createNote(formValue: {title: string, description: string}){
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

  updateSingleNote(formValue: {id: number, title: string, description: string, createdDate: Date}) {
    this.listNote[formValue.id - 1] = { ...formValue } ;
  }
}
