import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AppState } from '../shared/reducers';
import { Store, select } from '@ngrx/store';
import { setSearchValue, deleteNote, createNote } from '../shared/actions/notes.actions';
import { selectCurrentNoteId, selectNoteIds } from '../shared/selectors/notes.selectors';

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
    }
  }

  createNote() {
    let newId: number;
    this.store.pipe(select(selectNoteIds)).subscribe(data => {
      let clone = [...data]
      clone.sort((a: any, b: any) => b - a);
      newId = +clone[0];
    })
    this.store.dispatch(createNote({ note: { id: newId + 1, content: "", date: new Date().toLocaleTimeString(), placeholder: "New note" } }))
  }

}
