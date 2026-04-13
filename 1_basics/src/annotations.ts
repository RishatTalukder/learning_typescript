// // console.log('helloooo!!!');


// let name: string = 'Rishat';

// console.log(name);

// // name = 1

// let age: number = 25;

// // age = 'Rishat';

// let isStudent = true;

// isStudent = 10


// let age: number | string = 25;
// age = '25';
// age = 25

// // age = true


// let requestState: 'pending' | 'resolved' | 'rejected' = 'pending';
// requestState = 'resolved';
// requestState = 'rejected';

// // requestState = 'somethign else'

let numbers: number[] = [1, 2, 3, 4, 5];

let index: number | undefined;

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

console.log(index?.toFixed(2));

// let array: number[] = [1,2,3,4, "something"];