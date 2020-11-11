import { getOfficers, useOfficers } from "./OfficerProvider.js"

const filteredOficersContainer = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

export const OfficerSelect = () => {
    getOfficers()
    .then (() => {
        const officersArray = useOfficers()

        render(officersArray)
    }
    )
}
const render = (officers) => {
    filteredOficersContainer.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
            ${officers.map(
      officerObject => {
        return `<option value="${officerObject.name}">${officerObject.name}</option>`
      }
        ).join("")
      }
          </select>
      `
  }

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Get the name of the selected officer
        const selectedOfficer = changeEvent.target.value

        // Define a custom event
        const selectedOfficerEvent = new CustomEvent("officerSelected", {
            detail: {
                officerName: selectedOfficer
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(selectedOfficerEvent)
    }
})