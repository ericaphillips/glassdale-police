import { getCriminals, useCriminals } from "../criminals/CriminalProvider.js"

//designate eventHub where outputs will be sent or displayed
const eventHub = document.querySelector(".container")

//Custom event that alerts when a note state has been changed-- when a note has been crated (for now?)
const dispatchStateChangeEvent = () => {
    const noteStateChangedEvent = new CustomEvent("noteStateChanged")
    //dispatches the new event to the event hub
    eventHub.dispatchEvent(noteStateChangedEvent)
}

//create empty array to hold notes
let notes = []

//gets notes from the server, parses the responses into json, creates notes from parsedNotes
export const getNotes = () => {
    return fetch('http://localhost:8088/notes')
        .then(response => response.json())
        .then(parsedNotes => {
            notes = parsedNotes
        })

}

//creates a copy of notes to be used
export const useNotes = () => {
    return notes.slice()
}

//saves Notes onto dom
export const saveNote = (note) => {
    //gets notes currently saved on DOM
    return fetch('http://localhost:8088/notes', {
        //POST note object to API
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    //get all notes from API
    .then(getNotes)
    .then(getCriminals)
    //dispatch state change event to eventHub that notes have been updated
    .then(dispatchStateChangeEvent)
}

export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}