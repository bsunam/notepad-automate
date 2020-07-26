import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Note } from '../models/note';
import * as noteActions from '../actions/notes.actions';

export interface NotesState extends EntityState<Note> {
    selectedNoteId:number
}


export const adapter = createEntityAdapter<Note>({
});


export const initialNotesState = adapter.getInitialState({
    selectedNoteId: null
});


export const notesReducer = createReducer(

    initialNotesState,
    on(noteActions.loadAllNotes,
        (state, action) => adapter.addAll(
            action.notes, state)),
    
    on(noteActions.setSelectedNote,
        (state, action) => ({...state, selectedNoteId: action.noteId}))
        
        );

export const {
    selectIds: selectNoteIds,
    selectEntities: selectNoteEntities,
    selectAll: selectAllNotes,
    selectTotal: notesCount
 } = adapter.getSelectors();
