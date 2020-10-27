import { NoteAsHTML } from "./Note.js"
import { getNotes, useNotes } from "./NoteDataProvider.js"
//get notes from the api

const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", () => NoteList())

export const NoteList = () => {
    getNotes()
    .then (() => {
        const allNotes = useNotes()
        render(allNotes)
    }
    )
}
//interate notes array and make HTML representation of each
//render html string of notes to notesContainer element on DOM
const render = (notesArray) => {
    let notesHTMLRepresentations = ""
    for (const note of notesArray) {
        notesHTMLRepresentations += NoteAsHTML(note)
    }
    notesContainer.innerHTML = `
        ${notesHTMLRepresentations}
    `
}