// Gets alibi related to a single criminal and shows it in a list

import { useCriminals } from "./CriminalProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("alibiButtonClicked", (eventObject) => {
    //show the alibi(s) for selected criminal
    //console.log("Are you listening", eventObject.detail.criminalId)
    //need to find the one crimimnal whose id matches the criminalId sent from event
    const arrayofCriminals = useCriminals()
    const foundCriminal = arrayofCriminals.find(criminalObject => criminalObject.id === criminalObject.detail.criminalId)
    console.log("found criminal", foundCriminal)

    //add criminal's alibis to the crimimnal card 
    const alibisForFoundCriminal = foundCriminal.known_associates

})
//fucntion that adds alibis to the criminal card 
export const AlibiList = () => {
    //HTML for all of the alibis
    render(alibisForFoundCriminal)
}

//make render method for adding alibis 
const render = () => {
    return `
    <div class="alibi_list">
${alibiCollection.map(alibiObject => {
    return `
    <p>${alibiObject.name}</p>
    <p>${alibiObject.alibi}</p>
    `
})}
    `
}