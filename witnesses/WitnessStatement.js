//returns html string of witnesses
export const WitnessStatement = (witness) => {
    return `
        <div class="witness">
          <h5>${witness.name}</h5>
          <p>Statement: ${witness.statements}</p>
        </div>
    `
  }