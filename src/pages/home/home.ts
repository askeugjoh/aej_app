import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Note } from '../../models/note.model';
import { NoteService } from '../../providers/note-service';
import { AddNote } from '../add-note/add-note';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Promise<Note[]>;
  
  constructor(public navCtrl: NavController, 
    private noteService: NoteService) {
  }

  ionViewWillEnter() {
    this.notes = this.getAllNotes();
  }

  addNote(): void {
    this.navCtrl.push(AddNote);
  }

  getAllNotes() {
    return this.noteService.getAllNotes();
  }

}
