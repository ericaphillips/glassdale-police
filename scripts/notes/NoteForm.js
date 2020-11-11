import { saveNote } from "./NoteDataProvider.js"
import { useCriminals, getCriminals } from "../criminals/CriminalProvider.js"

//designates target area where notes will be sent
const contentTarget = document.querySelector(".noteFormContainer")
//creates eventHub
const eventHub = document.querySelector(".container")

//will be called in main.js, holds Note content
export const NoteForm = () => {
    //gets criminals
    getCriminals()
    //renders criminal content to DOM
    .then(render)
        }
        
//this creates the dropdown for the criminals in the note form
const CriminalSelect = () => { 

        const criminals = useCriminals()
    return `
    <select id="note--criminal" class= "criminalSelect"> 
            <option value="0">Suspect</option>
            ${criminals.map(
               //iterates through all criminals and presents them in the dropdown with the value of criminal ID, presenting criminal name 
                criminalObject => {
                    return `<option value="${ criminalObject.id }">${ criminalObject.name }</option>`
                }
            ).join("") //gets rid of unnecessary commas
        }
        </select>`
    
}
//create note form HTML with inputs and render form to DOM

const render = () => {
    contentTarget.innerHTML = `
        <input id="note--date" type="date"/>
        <input id="note--author" type="text" placeholder="Your name"/>
        ${CriminalSelect()}
        <input id="note--text" type="text" placeholder="Note text"/>

        <button id="saveNote">Save Note</button>
    `
}
// const render = () => {
//     contentTarget.innerHTML = `
//         <input id="note--dateOfInterview" type="date"/>
//         <input id="note--author" type="text" placeholder="Your Name Here"/>
//         <input id="note--suspect" type="text" placeholder="Suspect Name"/>
//         <textarea id="note--note" placeholder="Your Note Here"></textarea>
//         <button id="saveNote">Save Note</button>
//     `
// }

//add click event for when user clicks submit button
// Handle browser-generated click event in component
//submit should grab values from inputs, build new note object, and POST note to API
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const noteInterviewDate = document.querySelector("#note--date").value
        const noteAuthor = document.querySelector("#note--author").value
        const criminalId = parseInt(document.querySelector("#note--criminal").value)
        const noteText = document.querySelector("#note--text").value
        // const timestamp = Date.now().toLocaleDateString()

        // Make a new object representation of a note
        // Key/value pairs here
        const newNote = {

            noteInterviewDate,
            noteAuthor,
            criminalId,
            noteText
            // timestamp

        }

        // Change API state and application state
        saveNote(newNote)
    }
})



