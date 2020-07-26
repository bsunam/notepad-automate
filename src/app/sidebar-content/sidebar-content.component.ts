import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../shared/reducers';
import { selectAllNotes } from '../shared/selectors/notes.selectors';
import { Observable } from 'rxjs';
import { Note } from '../shared/models/note';
import { setSelectedNote } from '../shared/actions/notes.actions';

@Component({
  selector: 'app-sidebar-content',
  templateUrl: './sidebar-content.component.html',
  styleUrls: ['./sidebar-content.component.scss']
})
export class SidebarContentComponent implements OnInit {

  notes$: Observable<Note[]>;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {
    this.notes$ = this.store.pipe(select(selectAllNotes))
  }

  selectedNote(nav: Note) {
    this.store.dispatch(setSelectedNote({noteId: nav.id}))
  }

}
