import { useOfficers, getOfficers } from './officers/OfficerProvider.js'

getOfficers()
    .then(() => {
        const officerArray = useOfficers()
        console.log(officerArray)
    }
    )

// import { useCriminals, getCriminals } from './criminals/CriminalProvider.js'
import { CriminalList } from './criminals/CriminalList.js'
CriminalList()

    // getCriminals()
    //     .then(() => {
    //         const criminalArray = useCriminals()
    //         console.log(criminalArray)
    //     }
    //     )

    import { ConvictionSelect } from './convictions/ConvictionSelect.js'
    ConvictionSelect()

import { OfficerSelect } from './officers/OfficerSelect.js'

OfficerSelect()
