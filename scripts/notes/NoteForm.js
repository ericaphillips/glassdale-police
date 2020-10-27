import { saveNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")
//create note form HTML with inputs and render form to DOM
const render = () => {
    contentTarget.innerHTML = `
        <input type="date" id="note--date"/>
        <input type="text" placeholder="Your name" id="note--author"/>
        <input type="text" placeholder="Suspect's name" id="note--suspect"/>
        <input type="text" id="note--text" placeholder="Note text"/>

        <button id="saveNote">Save Note</button>
    `
}
//add click event for when user clicks submit button
// Handle browser-generated click event in component
//submit should grab values from inputs, build new note object, and POST note to API
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteInterviewDate = document.querySelector("#note--date").value
        const noteAuthor = document.querySelector("#note--author").value
        const noteSuspect = document.querySelector("#note--suspect").value
        const noteText = document.querySelector("#note--text").value
        const timestamp = Date.now()

        // Make a new object representation of a note
        const newNote = {
            timestamp,
            noteInterviewDate,
            noteAuthor,
            noteSuspect,
            noteText

            // Key/value pairs here
        }

        // Change API state and application state
        saveNote(newNote)
    }
})


export const NoteForm = () => {
    render()
}

