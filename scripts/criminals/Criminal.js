const eventHub = document.querySelector(".container")

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Convicted for ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Incarcerated between:
                ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
                ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
            </p>
            <p>Age: ${criminalObject.age}</p>
            <div>
                <h2>Facilities</h2>
                <ul>
                    ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
                </ul>
            </div>
            <button id="associates--${criminalObject.id}">Show Associates</button>
        </div>
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