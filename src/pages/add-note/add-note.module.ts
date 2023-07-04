import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddNote } from './add-note';

@NgModule({
  declarations: [
    AddNote,
  ],
  imports: [
    IonicPageModule.forChild(AddNote),
  ],
})
export class AddNoteModule {}
