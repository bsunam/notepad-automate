import { Injectable } from '@angular/core';
import { Note } from '../models/note';

@Injectable({ providedIn: 'root' })
export class NotesService {

    getNotes(): Note[] {
        return [
            { id: 1, content: "first content", date: new Date().toISOString() },
            { id: 2, content: "second content", date: new Date().toISOString() },
            { id: 3, content: "third content", date: new Date().toISOString() }
        ]
    }
}