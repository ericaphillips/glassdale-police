import { NoteAsHTML } from "./Note.js"
import { getNotes, useNotes, deleteNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"
//get notes from the api

const notesContainer = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

//listens for noteStateChanged, calls NoteList when it happens
eventHub.addEventListener("noteStateChanged", () => NoteList())

//renders notes and criminals 
const render = (notesArray, criminalArray) => {
    //creates empty string to hold note HTML 
    let notesHTMLRepresentations = ""
    //iterates through notes
    console.log("note and related criminal", criminalArray, notesArray)
    for (const note of notesArray) {
        // Find the related criminal
        const relatedCriminal = criminalArray.find(criminal => criminal.id === note.criminalId)
       //note HTML had parameters for both note and the related criminal
        notesHTMLRepresentations+= NoteAsHTML(note, relatedCriminal)
    }
    notesContainer.innerHTML = `
    <h3>Case Notes</h3>
    ${notesHTMLRepresentations}
    `
    }

//render list of Notes to the DOM
export const NoteList = () => {
    //gets notes
    getNotes()
    //gets criminals
    .then(getCriminals)
    .then (() => {
        const allNotes = useNotes()
        const allCriminals = useCriminals()
        //renders all notes with criminals to DOM
        render(allNotes, allCriminals)
    }
    )
}

eventHub.addEventListener("click", clickEvent => {
    console.log(clickEvent, "id")
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")
        //invoke functiont hat does delete operation
        //once delete, THEN invoke useNotes and render new note lisrt
        deleteNote(id).then(
            () => {
                const updatedNotes = useNotes()
                const criminals = useCriminals()
                render(updatedNotes, criminals)
            }
        )
    }
})
//interate notes array and make HTML representation of each
//render html string of notes to notesContainer element on DOM
    
    
//     let notesHTMLRepresentations = ""
//     for (const note of notesArray) {
//         notesHTMLRepresentations += NoteAsHTML(note)
//     }
//     notesContainer.innerHTML = `
//         ${notesHTMLRepresentations}
//     `
// }