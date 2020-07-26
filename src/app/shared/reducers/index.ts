import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as notesReducer from './notes.reducers';

export interface AppState {
	noteState: notesReducer.NotesState;
}

export const reducers: ActionReducerMap<AppState> = {
  noteState: notesReducer.notesReducer
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return function(state: AppState, action: any): AppState {
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger] 
  : [];
