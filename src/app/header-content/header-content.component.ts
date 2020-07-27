import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppState } from '../shared/reducers';
import { Store, select } from '@ngrx/store';
import { setSearchValue, deleteNote, createNote, setSelectedNote } from '../shared/actions/notes.actions';
import { selectCurrentNoteId, selectNoteIds } from '../shared/selectors/notes.selectors';
import { APP_CONSTANTS } from 'src/constant';

@Component({
  selector: 'app-header-content',
  templateUrl: './header-content.component.html',
  styleUrls: ['./header-content.component.scss']
})
export class HeaderContentComponent implements OnInit {

  searchValue: FormControl = new FormControl('');

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.searchValue.valueChanges.subscribe(data => {
      this.store.dispatch(setSearchValue({ value: data }));
    })
  }

  deleteNote() {
    let noteId: number;
    this.store.pipe(select(selectCurrentNoteId)).subscribe(id =>
      noteId = id
    );
    if (noteId) {
      this.store.dispatch(deleteNote({ id: noteId }));
      this.store.dispatch(setSelectedNote({noteId: null}))
    }
  }

  createNote() {
    let newId: number;
    this.store.pipe(select(selectNoteIds)).subscribe(data => {
      let clone = [...data]
      clone.sort((a: any, b: any) => b - a);
      newId = +clone[0];
    })
    this.store.dispatch(createNote({ note: { id: newId ? newId + 1 : 1, content: "", date: new Date().toLocaleTimeString(), placeholder: APP_CONSTANTS.DEFAULT_PLACEHOLDER } }))
  }

}
