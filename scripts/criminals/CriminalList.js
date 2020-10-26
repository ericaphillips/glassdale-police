import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from "./Criminal.js"

const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeChosen', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== "0"){
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        const matchingCriminals = appStateCriminals.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
    }
})

const render = criminalCollection => {
    contentTarget.innerHTML = `
    <section id="criminals">
        ${
            convictionsCollection.map(convictionObject => {
                return `<option value= "${convictionObject.id}">${convictionObject.name}</option>`
            })
        }
    </select>
`
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}