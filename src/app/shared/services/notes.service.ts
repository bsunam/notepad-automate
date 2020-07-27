import { Injectable } from '@angular/core';
import { Note } from '../models/note';
import { APP_CONSTANTS } from 'src/constant';

@Injectable({ providedIn: 'root' })
export class NotesService {

    getNotes(): Note[] {
        return [
            { id: 1, content: "first content", date: new Date().toLocaleTimeString(), placeholder:APP_CONSTANTS.DEFAULT_PLACEHOLDER },
            { id: 2, content: "second content", date: new Date().toLocaleTimeString(), placeholder:APP_CONSTANTS.DEFAULT_PLACEHOLDER },
            { id: 3, content: "third content", date: new Date().toLocaleTimeString(), placeholder:APP_CONSTANTS.DEFAULT_PLACEHOLDER }
        ]
    }
}