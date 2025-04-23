import { NgFor, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NoteModule } from '../../../_models/note.module';

@Component({
  selector: 'app-list',
  imports: [NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  noteslist:NoteModule[] = [
    new NoteModule(1,'Test Note','Test Description Note',new Date()),
    new NoteModule(2,'Test Note2','Test Description Note',new Date()),
    new NoteModule(3,'Test Note3','Test Description Note',new Date()),

  ]
  deleteNote(id:number){
    var index= this.noteslist.findIndex(x => x.id === id)
    this.noteslist.splice(index,1)
  }
}

