import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/reducers';
import { Observable } from 'rxjs';
import { Note } from '../shared/models/note';
import { selectCurrentNote } from '../shared/selectors/notes.selectors';
import { updateNote } from '../shared/actions/notes.actions';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  selectedNote: Note;

  ngOnInit(): void {
    this.store.pipe(select(selectCurrentNote)).subscribe(data => {
      if (data)
        this.selectedNote = data
      else
        this.selectedNote = null;
    })
  }

  bindData(data: string) {
    const noteToUpdate: Update<Note> = {
      id: this.selectedNote.id,
      changes: {
        content: data
      }
    }
    this.store.dispatch(updateNote({ note: noteToUpdate }))
  }

}
