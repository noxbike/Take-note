import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditNoteComponent } from './edit-note/edit-note.component';
import { SingleNoteComponent } from './single-note/single-note.component';

const routes: Routes = [
  {path: 'update/:id', component:EditNoteComponent},
  {path: ':id', component: SingleNoteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
