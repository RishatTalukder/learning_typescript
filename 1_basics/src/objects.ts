let person: {
    name: string
    age: number
    isStudent?: boolean
} = {
    name: 'Rishat',
    age: 25,
    // isStudent: true,
    // canDrink: true
}

type Instrument = {
    brand: string
    isElectric?: boolean
    cost: number
}

// let guiter: {
//     brand: string
//     isElectric: boolean
//     cost: number
// } = {
//     brand: 'Gibson',
//     isElectric: true,
//     cost: 1000
// }
let guiter: Instrument = {
    brand: 'Gibson',
    isElectric: true,
    cost: 1000
}

// let drums: {
//     brand: string
//     cost: number
// } = {
//     brand: 'Yamaha',
//     cost: 500
// }
let drums: Instrument = {
    brand: 'Yamaha',
    cost: 500
}

// let bass: {
//     brand: string
//     cost: number
//     isElectric: boolean
// } = {
//     brand: 'Fender',
//     cost: 300,
//     isElectric: false
// }

let bass: Instrument = {
    brand: 'Fender',
    cost: 300,
    isElectric: false
}

let instruments: Instrument[] = [guiter, drums, bass]

