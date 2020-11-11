const eventHub = document.querySelector(".container")

export const Criminal = (criminalObjects) => {
    return `
    <div class="crims">
    <h5><div class="criminal__name"> ${criminalObjects.name}</div></h5>
    <div class="criminal__age">Age: ${criminalObjects.age}</div>
    <div class="criminal__crime">Crime: ${criminalObjects.conviction}</div>
    <div class="criminal__jailStart">Jail start: ${new Date(criminalObjects.incarceration.start).toLocaleDateString('en-US')}</div>
    <div class="criminal__jailEnd">Jail end: ${new Date(criminalObjects.incarceration.end).toLocaleDateString('en-US')}</div>
    // <button id="associates--${criminalObjects.id}">Associate Alibis</button>
    </div>
    `
}

// eventHub.addEventListener("click", (eventObject) => {
//     //split id of alibi button
//     const [prefix, criminalId] = eventObject.target.id.split("--")
//     //check if the button that was clicked is the alibi button

//     if(eventObject.target.id.startsWith("associates--")){
//     //build a custom event
//     const myCustomEvent = new CustomEvent("alibiButtonClicked", {
//         detail: {
//             criminalId: criminalId
//         }
//     })
//     //dispacth the event to the eventHub so other modules can listne for it
//     eventHub.dispatchEvent(myCustomEvent)
//     }
// })