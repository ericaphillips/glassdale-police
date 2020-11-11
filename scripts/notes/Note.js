//convert object to HTML string

export const NoteAsHTML = (noteObject, criminalObject) => {
    //return HTML string
    return `
    <div class="note">
    <h5>Author: ${noteObject.noteAuthor}</h5>
    <p>Date of Interview: ${noteObject.noteDate}</p>
    <p>Suspect: ${criminalObject.name}</p>
    <p>${noteObject.noteText}</p>
    <button id="deleteNote--${noteObject.id}">Delete</button>
    </div>
    `
}