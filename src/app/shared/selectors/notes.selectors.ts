import * as noteDetails from '../reducers/notes.reducers';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getSelectedNoteId = (state: noteDetails.NotesState) => state.selectedNoteId;
export const getSearchValue = (state: noteDetails.NotesState) => state.searchValue;

export const getNoteState = createFeatureSelector<noteDetails.NotesState>('noteState');

export const selectNoteIds = createSelector(getNoteState, noteDetails.selectNoteIds);
export const selectNoteEntities = createSelector(getNoteState, noteDetails.selectNoteEntities);
export const selectAllNotes = createSelector(getNoteState, noteDetails.selectAllNotes);
export const NotesCount = createSelector(getNoteState, noteDetails.notesCount);
export const searchValue = createSelector(getNoteState, getSearchValue);

export const selectCurrentNoteId = createSelector(getNoteState, getSelectedNoteId);

export const selectCurrentNote = createSelector(
  selectNoteEntities,
  selectCurrentNoteId,
  (NoteEntities, NoteId) => NoteEntities[NoteId]
);

export const filterNotes = createSelector(
  selectAllNotes,
  searchValue,
  (NoteEntities, value) => NoteEntities.filter(note => note.content.indexOf(value.toString()) != -1)
);

