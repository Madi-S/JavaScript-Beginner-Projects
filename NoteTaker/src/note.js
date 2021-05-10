const databaseURL = 'https://askme-app-9eff3-default-rtdb.firebaseio.com/notes.json'

export class Note {
    static storeNote(note) {
        return fetch(databaseURL, {
            method: 'POST',
            body: JSON.stringify(note),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    static getNotesFor(userID) {

    }

    static deleteNote(noteID) {

    }
}