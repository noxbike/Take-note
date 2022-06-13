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
      description: 'lorem ipsum mna idl shn;,dlujielhq kdlqm djkcnslug lskd uhdklq kdlm  dklsmity ek slkdh klqukjqmls jdkl  jfihsk',
      deadline: new Date('21/07/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    },
    {
      id: 2,
      title: 'Make My Portfolio',
      description: 'lorem ipsum mna idl shn;,dlujielhq kdlqm djkcnslug lskd uhdklq kdlm  dklsmity ek slkdh klqukjqmls jdkl  jfihsk',
      deadline: new Date('21/06/2022'),
      createdDate: new Date('21/05/2022'),
      feedback: '',
    }
  ]

  getAllNote(){
    return this.listNote
  }
}
