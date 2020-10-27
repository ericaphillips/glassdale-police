//convert object to HTML string
//return HTML string

export const NoteAsHTML = (noteObject) => {
    return `
    <div class="note">
    <h5>Author: ${noteObject.noteAuthor}</h5>
    <p>Date of Interview: ${noteObject.noteDate}</p>
    <p>Suspect: ${noteObject.noteSuspect}</p>
    <p>${noteObject.noteText}</p>
    <p>${noteObject.timestampe}</p>
    </div>
    `
}