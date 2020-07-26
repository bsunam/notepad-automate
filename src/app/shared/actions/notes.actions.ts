import { createAction, props } from '@ngrx/store';
import { Note } from '../models/note';
import { Update } from '@ngrx/entity';


export const loadAllNotes = createAction(
    "[Load Notes] All Notes Loaded",
    props<{notes: Note[]}>()
);

export const setSelectedNote = createAction(
    "[Selected Note] Set selected note",
    props<{noteId: number}>()
);

export const updateNote = createAction(
    "[Update Note] update selected note",
    props<{note: Update<Note>}>()
);