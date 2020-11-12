import { getWitnessStatements, useWitnessStatements } from "./WitnessStatementProvider.js"
import { WitnessStatement } from "./WitnessStatement.js";

const eventHub = document.querySelector(".container")
const witnessesContainer = document.querySelector(".caseDataContainer")

//listens for witness button to be clicked so it can render witness array
eventHub.addEventListener("witnessesClicked", () => {
  console.log("Heard witness statements button clicked")

  WitnessesList()
})
//renders witness array
const WitnessesList = () => {

  getWitnessStatements()
    .then(() => {
      const witnessArray = useWitnessStatements()
      console.log(witnessArray)
      render(witnessArray)
    })

}
//renders witness statement array
const render = (witnessStatementsArray) => {
  let witnessStatementsHTMLRepresentations = ""
  for (const witness of witnessStatementsArray) {
    //iterates through witnesses and adds witness statement to array for each
    witnessStatementsHTMLRepresentations += WitnessStatement(witness)

    witnessesContainer.innerHTML = `
          <h3>Glassdale Witnesses</h3>
          <section class="witnessesList">
            ${witnessStatementsHTMLRepresentations}
          </section>
        `
  }
}