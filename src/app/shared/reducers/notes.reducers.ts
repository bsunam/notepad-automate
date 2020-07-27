import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Note } from '../models/note';
import * as noteActions from '../actions/notes.actions';

export interface NotesState extends EntityState<Note> {
    selectedNoteId: number,
    searchValue: String
}


export const adapter = createEntityAdapter<Note>({
});


export const initialNotesState = adapter.getInitialState({
    selectedNoteId: null,
    searchValue: ''
});


export const notesReducer = createReducer(

    initialNotesState,
    on(noteActions.loadAllNotes,
        (state, action) => adapter.addAll(
            action.notes, state)),

    on(noteActions.setSelectedNote,
        (state, action) => ({ ...state, selectedNoteId: action.noteId })),

    on(noteActions.createNote,
        (state, action) => adapter.addOne(action.note, state)),

    on(noteActions.updateNote,
        (state, action) => adapter.updateOne(action.note, state)),

    on(noteActions.deleteNote,
        (state, action) => adapter.removeOne(action.id, state)),

    on(noteActions.setSearchValue,
        (state, action) => ({ ...state, searchValue: action.value }))

);

export const {
    selectIds: selectNoteIds,
    selectEntities: selectNoteEntities,
    selectAll: selectAllNotes,
    selectTotal: notesCount
} = adapter.getSelectors();
