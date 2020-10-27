import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from "./Criminal.js"
import { useConvictions } from '../convictions/ConvictionProvider.js'

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".criminalsContainer")

export const CriminalList = () => {
    getCriminals()
    .then(() => {
        const criminalArray = useCriminals()
        render(criminalArray)
    })
}

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener('crimeSelected', event => {
    // Use the property you added to the event detail.
    if (event.detail.crimeThatWasChosen !== 0) {
        /*
            Filter the criminals application state down to the people that committed the crime
        */
        // const matchingCriminals = appStateCriminals.filter()

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       const criminalsArray = useCriminals()
       const convictionsArray = useConvictions()
       const convictionThatWasChosen = convictionsArray.find(convictionObject => {
           return convictionObject.id === parseInt(event.detail.crimeThatWasChosen)
       })
       const filteredCriminalsArray = criminalsArray.filter(criminalObject => {
           return criminalObject.conviction === convictionThatWasChosen.name
       })
       render(filteredCriminalsArray)
    }
})

eventHub.addEventListener("officerSelected", selectedOfficerEventObject => {
    const selectedOfficersName = selectedOfficerEventObject.detail.officerName

    const criminalsArray = useCriminals()

    const filteredOfficersArray = criminalsArray.filter(
        (criminalObjects) => {
            return criminalObjects.arrestingOfficer === selectedOfficersName
        }
    )
    render (filteredOfficersArray)
})

const render = (criminalsArray) => {
    let criminalsHTMLRepresentations = ""
    for (const criminal of criminalsArray) {
        criminalsHTMLRepresentations += Criminal(criminal)
        criminalsContainer.innerHTML = `
        <h3>Glassdale Criminals</h3>
        <section class="criminalsList">
        ${criminalsHTMLRepresentations}
        </section>
        `
    }
}


// const render = (criminalCollection) => {
//     contentTarget.innerHTML = `
//     <section id="criminals">
//         ${
//             convictionsCollection.map(convictionObject => {
//                 return `<option value= "${convictionObject.id}">${convictionObject.name}</option>`
//             })
//         }
//     </select>
// `
// }


// Render ALL criminals initally
// export const CriminalList = () => {
//     getCriminals()
//         .then(() => {
//             const appStateCriminals = useCriminals()
//             render(appStateCriminals)
//         })
// }