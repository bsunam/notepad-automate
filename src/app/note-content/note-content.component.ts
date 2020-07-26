import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/reducers';
import { Observable } from 'rxjs';
import { Note } from '../shared/models/note';
import { selectCurrentNote } from '../shared/selectors/notes.selectors';

@Component({
  selector: 'app-note-content',
  templateUrl: './note-content.component.html',
  styleUrls: ['./note-content.component.scss']
})
export class NoteContentComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  selectedNote: string = "example";

  ngOnInit(): void {
    this.store.pipe(select(selectCurrentNote)).subscribe(data => {
      if (data)
        this.selectedNote = data.content
    })
  }

}
