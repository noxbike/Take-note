import { Injectable } from '@angular/core';
import { TakeNot } from '../model/note.model';

@Injectable({
  providedIn: 'root'
})
export class TakeNoteService {

  constructor() { }

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

  getAllNote(){
    return this.listNote
  }
}
