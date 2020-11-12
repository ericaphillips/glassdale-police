const eventHub = document.querySelector(".container")

export const Criminal = (criminalObject, facilities) => {
    return `
    <div class="criminal">
        <h4>${criminalObject.name}</h4>
        <div class="criminal__details">
            <p>Crime: ${criminalObject.conviction}</p>
            <p>Arrested by ${criminalObject.arrestingOfficer}</p>
            <p>Jail dates:
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
            <button id="associates--${criminalObject.id}">Associate Alibis</button>
        </div>
    </div>
    `
}


eventHub.addEventListener("click", (eventObject) => {
    // split id of alibi button!
    const [nameOfId, criminalId] = eventObject.target.id.split("--")
    
    // check if button clicked was alibi button
    if(eventObject.target.id.startsWith("associates--")){
    //   console.log("button was clicked:", nameOfId, criminalId)
      // build a custom event
      const myCustomEvent = new CustomEvent("alibiButtonClicked", {
        detail: {
          criminalId: criminalId
        }
      })
      // dispatch the event to the eventHub so that other modules can listen for this event
      eventHub.dispatchEvent(myCustomEvent)
    }
})