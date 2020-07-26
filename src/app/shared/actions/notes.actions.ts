import { createAction, props } from '@ngrx/store';
import { Note } from '../models/note';


export const loadAllNotes = createAction(
    "[Load Notes] All Notes Loaded",
    props<{notes: Note[]}>()
);

export const setSelectedNote = createAction(
    "[Selected Note] Set selected note",
    props<{noteId: number}>()
);