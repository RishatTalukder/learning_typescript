// function add(a: number, b: number): number {
//     return a + b;
// }

// console.log(add(2,3));


let names: string[] = ['Rishat', 'Bob', 'Alice', 'Charlie'];

function find_name(name: string): boolean {
    return names.includes(name);
}

console.log(find_name('Rishat'));


function calculateDiscount(price: number, discount: number): number {
    return price * (1 - discount);
}

// function calculate_discounted_price(price: number, discount_percentage: number = 0): number {
//     return price * (1 - discount_percentage);
// }

function calculate_discounted_price(price: number, discount_percentage?: number): number {
    return price * (1 - discount_percentage || 0);
}

// function sum_array(array: number[]): number {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

function sum_array(array: number[]): number {
    return array.reduce((total, num) => total + num, 0);
}

function multiply_array(
    multiplier: number | string,
    array: number[]
): number[] {

    if (typeof multiplier === 'string') {
        multiplier = Number(multiplier);
    }

    return array.map((num) => num * multiplier);
}

console.log(multiply_array('2', [1, 2, 3]))

function info(user: {
    firstName: string
    lastName: string
    age: number
}) : {
    fullName: string
    age: number
} {
    return {
        fullName: `${user.firstName} ${user.lastName}`,
        age: user.age
    };  
}

function processData(
    input: string | number,
    config: { reverse: boolean } = { reverse: false }
) : string | number {
    if (typeof input === 'string') {
        if (config.reverse) {
            return input.split('').reverse().join('');
        } else {
            return input.toUpperCase();
        }
    } else {
        return input * input;
    }
}