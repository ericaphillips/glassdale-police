import { getCriminals, useCriminals } from './CriminalProvider.js'
import { Criminal } from "./Criminal.js"
import { useConvictions } from '../convictions/ConvictionProvider.js'
import { useCriminalFacilities, getCriminalFacilities } from '../CriminalFacilityProvider.js'
import { useFacilities, getFacilities } from '../FacilityProvider.js'

const eventHub = document.querySelector(".container")

const criminalsContainer = document.querySelector(".criminalsContainer")

let criminalsArray = []
let facilitiesArray = []
let criminalFacilitiesArray = []


export const CriminalList = () => {
    getCriminals()
    .then(getFacilities)
    .then(getCriminalFacilities)
        .then(
            () => {
                // Pull in the data now that it has been fetched
                const facilitiesArray = useFacilities()
                const criminalFacilitiesArray = useCriminalFacilities()
                const criminalsArray = useCriminals()

                // Pass all three collections of data to render()
                render()
            }
        )
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
       criminals = filteredCriminalsArray
       render()
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
    console.table(filteredOfficersArray, "officers maybe")
    criminalsForOfficer = filteredOfficersArray
    render()
})

const render = () => {
    let criminalsHTMLRepresentations = ""
    // Step 1 - Iterate all criminals
    for (const criminal of criminalsArray) {
            // Step 2 - Filter all relationships to get only ones for this criminal
            const facilityRelationshipsForThisCriminal = criminalFacilitiesArray.filter(cf => cf.criminalId === criminal.id)

            // Step 3 - Convert the relationships to facilities with map()
            const facilitiesArray = facilityRelationshipsForThisCriminal.map(cf => {
                const matchingFacilityObject = criminalFacilitiesArray.find(facility => facility.id === cf.facilityId)
                return matchingFacilityObject
            })

            // Must pass the matching facilities to the Criminal component
            criminalsHTMLRepresentations += Criminal(criminal, facilities)
        }
    criminalsContainer.innerHTML = `
    <h3> Glassdale Criminals </h3>
    <section class="criminalsList">
    ${criminalsHTMLRepresentations}
    </section> `
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