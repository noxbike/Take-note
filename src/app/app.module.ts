import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListNoteComponent } from './list-note/list-note.component';
import { HeaderComponent } from './header/header.component';
import { NotesComponent } from './notes/notes.component';
import { CreateNoteComponent } from './create-note/create-note.component';

@NgModule({
  declarations: [
    AppComponent,
    ListNoteComponent,
    HeaderComponent,
    NotesComponent,
    CreateNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
