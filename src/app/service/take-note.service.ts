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
      deadline: new Date('21/07/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    },
    {
      id: 2,
      title: 'Make My Portfolio',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elitdsdd...',
      deadline: new Date('21/06/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    },
    {
      id: 3,
      title: 'Learn Angular',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit...',
      deadline: new Date('21/07/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    },
    {
      id: 4,
      title: 'Post on Instagram',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit..',
      deadline: new Date('21/06/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    }
  ]

  getAllNote(){
    return this.listNote
  }
}
