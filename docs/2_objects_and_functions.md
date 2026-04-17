# Typescript Fundamentals Part 2 (Objects and Functions)

I hope you like the first part. Now, let's learn about objects and functions. If you haven't read the please do so because there I did the whole setup.

As always, I'm `Md. Rishat Talukder`. Let's try to learn Typescript together.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_typescript)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

**Pre-requisites**

- Basic javascript knowledge
- Basic Node project structure knowledge

# Objects

## Basic object Type annotations

Genrally, in javascript we use objects to store data of different values with different keys.

```js {.line-numbers}
const person = {
  name: "Rishat",
  age: 22,
  isProgrammer: true,
};
```

Here we have a object called `person` which has three keys `name`, `age` and `isProgrammer` and values `Rishat`, `22` and `true` respectively.

Now, if you are using typescript you should also add type annotations for an object.

Make, a new file named `objects.ts` in the `src` folder and don't forget to import it in the `main.ts` file.

To type annotate we will still use the `:` after the variable name but as you can see a object can have different keys and each key can have different types we have to specify that too.

```ts {.line-numbers}
const person: {
  name: string;
  age: number;
  isProgrammer: boolean;
} = {
  name: "Rishat",
  age: 22,
  isProgrammer: true,
};
```

To type annotate a object we have to specify the type of each key inside a `{}`.

Now, we are actually saying that person object can have a key `name` which is of type `string`, a key `age` which is of type `number` and a key `isProgrammer` which is of type `boolean`.

And if you try to add a new key or change the value of a existing key to a different type you will get an error.

Try it out.

> I know, I know this looks clunky but this just the basic idea.

You can also do optional chaining inside the types to allow some keys to be `optional`.

Let's say we want `isProgrammer` key to be optional.

```ts {.line-numbers}
const person: {
  name: string;
  age: number;
  // isProgrammer is now optional
  isProgrammer?: boolean;
} = {
  name: "Rishat",
  age: 22,
  // isProgrammer: true
};
```

Now, you can keep or remove the key `isProgrammer` as you like. This will check if there is a isProgrammer key and if there is it will be of type `boolean`. Otherwise typescript will not complain.

## Array of Objects

Now, what if there is an array of objects.

Let's say we have something like this.

```ts {.line-numbers}
let guiter = {
  brand: "Gibson",
  isElectric: true,
  cost: 1000,
};

let drums = {
  brand: "Yamaha",
  cost: 500,
};

let bass = {
  brand: "Fender",
  cost: 300,
  isElectric: false,
};

let instruments = [guiter, drums, bass];
```

Here, I have created three objects and put them inside an array.

How do we type annotate this?

First of all, let's annotate the objects.

```ts {.line-numbers}
let guiter: {
  brand: string;
  isElectric: boolean;
  cost: number;
} = {
  brand: "Gibson",
  isElectric: true,
  cost: 1000,
};

let drums: {
  brand: string;
  cost: number;
} = {
  brand: "Yamaha",
  cost: 500,
};

let bass: {
  brand: string;
  cost: number;
  isElectric: boolean;
} = {
  brand: "Fender",
  cost: 300,
  isElectric: false,
};
```

For, guiter and bass we have to add `isElectric` key and for drums we don't have to add it.

Now, how do we type annotate the array?

Normally we use `type[]` to specify an array.

But now each object is an object and each object has different types of values.

So, what we can do is add the object type along with a `[]` to make it an array of objects.

Like this.

```ts {.line-numbers}
let someObject: { key: string }[] = [someObject1, someObject2];
```

But here we have to ensure that each object has the same type of values with exact same keys. But one problem is that the drums object does not have the `isElectric` key but the other two objects do have the `isElectric` key.

So, we use optional chaining.

```ts {.line-numbers}
let instruments: {
  brand: string;
  isElectric: boolean;
  cost: number;
}[] = [guiter, drums, bass];
```

Here, I didn't make the isElectric optional and you should see that drums have a squiggle right below saying that `isElectric` key is not present in the drums object.

So, we can just make it optional.

```ts {.line-numbers}
let instruments: {
  brand: string;
  // optional
  isElectric?: boolean;
  cost: number;
}[] = [guiter, drums, bass];
```

Now, there should be no errors. But one thing's that keeps on bugging me is the syntax. We have define a type of an object as `{}` and inside we have to specify the type of each key and we have to do it again and again for each object. This make the code look very messy and almost unreadable.

We have a way to make it more readable and less verbose.

## Type Aliases

This is a very useful feature of typescript. And I'll dedicated a whole article for it. For, now we can use `type aliases` make custom types. Mostly for commonly used types of the program.

We are writting the type of instrument object right? Each object has almost the same keys and types of values for each key. So, we can make this a new type.

```ts {.line-numbers}
type Instrument = {
  brand: string;
  isElectric?: boolean;
  cost: number;
};
```

To make a type alias you have to use the `type` keyword and then to make object type just follow the previous steps of object annotations. Here, I made a new type named `Instrument` that specifies that a Instrument object will have a brand key of type string, a optional key `isElectric` of type boolean and a key `cost` of type number.

Now we can use the `Instrument` type to annotate the objects.

```ts {.line-numbers}
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
  brand: "Gibson",
  isElectric: true,
  cost: 1000,
};

// let drums: {
//     brand: string
//     cost: number
// } = {
//     brand: 'Yamaha',
//     cost: 500
// }
let drums: Instrument = {
  brand: "Yamaha",
  cost: 500,
};

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
  brand: "Fender",
  cost: 300,
  isElectric: false,
};

let instruments: Instrument[] = [guiter, drums, bass];
```

Now, as you can see we have a cleaner looking code.

# Functions

## Basic function type annotations

Let's say we have a function that takes a number and returns a number.

```js {.line-numbers}
function add(a, b) {
  return a + b;
}
```

Now, how do we type annotate this function?

```ts {.line-numbers}
function add(a: number, b: number): number {
  return a + b;
}
```

Just we add use `:` after a variable name, for function parameters we can do the same thing.

And to tell what type of value a function returns we use `:` after the function name.

That's it nothing dramatic.

But let's practice something.

> Make a programme that has an array of `names` and a function that takes a name and returns true if the name is in the array and false otherwise.

Can you do it?

Try it out yourself.

```ts {.line-numbers}
let names: string[] = ["Rishat", "Bob", "Alice", "Charlie"];

function find_name(name: string): boolean {
  return names.includes(name);
}

console.log(find_name("Rishat"));
```

Now, if you run this code you should see that the output is `true`.

Now, You should try to return a function of the names array like `toSorted` and see if it works.

It won't work because the return type of the `toSorted` function is `string[]` and the return type of the `find_name` function is `boolean`.

So, it's is pretty easy if you know what you are doing.

## Optional Parameters

In functions you can have optional parameters. Let's say we have a function that takes a price and a discount percentage and returns the discounted price.

```js {.line-numbers}
function calculate_discounted_price(price, discount_percentage) {
  return price * (1 - discount_percentage);
}

calculate_discounted_price(100, 0.1);
```

Looks pretty simple.

How do we type annotate this function?

```ts {.line-numbers}
function calculate_discounted_price(
  price: number,
  discount_percentage: number,
): number {
  return price * (1 - discount_percentage);
}
```

Same as before but let's say the discount value can be optional. While calling the function we can pass the discount value or not.

We do this the same way we can set a `optional object key`.

> I talked about this in the previous section.

We just add a `?` after the parameter name.

```ts {.line-numbers}
function calculate_discounted_price(
  price: number,
  discount_percentage?: number,
): number {
  return price * (1 - discount_percentage);
}
```

This way I just saying that the `discount_percentage` parameter is optional.

Now, call try to to call the function with and without the discount value.

```ts {.line-numbers}
calculate_discounted_price(100, 0.1);
calculate_discounted_price(100);
```

The first line should work just fine but if you look at the second function call you should see that it doesn't work. Why?

Because inside the function we are checking if the `discount_percentage` value is defined or not. Then we are doing some math inside with the `discount_percentage` value.

Now, if the discount value is passed then the `discount_percentage` value will be undefined and we cannot do mathematical operations on a undefined value.

So, what we can do to fix this is to set a default value for the `discount_percentage` parameter or we can check if the `discount_percentage` value is defined or not and if not defined then instead of using the `discount_percentage` value we can use another value.

```ts {.line-numbers}
function calculate_discounted_price(
  price: number,
  discount_percentage: number = 0,
): number {
  return price * (1 - discount_percentage);
}
```

or

```ts {.line-numbers}
function calculate_discounted_price(price: number, discount_percentage?: number): number {
    return price * (1 - discount_percentage || 0);
```

> Here i'm using the logical OR operator to check if the `discount_percentage` value is defined or not. If it is defined then we use the `discount_percentage` value. If it is not defined then we use the default value of 0.

## Array typing in functions

There can be different kinds if parameters in a function. Now, if we have a function that takes an array of numbers and returns the sum of all the numbers.

```js {.line-numbers}
function sum_array(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
```

How do we type annotate this function?

```ts {.line-numbers}
function sum_array(array: number[]): number {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
```

Now, if you take a look I only typed the parameters and the return type. But inside the function you can see that I didn't set the type for any other variable.

Type script is pretty smart in type infering the type of the variable based on the value that is assigned to it.

Sum is a number because the value is `0`.

To showcase how smart it can be let's use a array method `reduce` to calculate the sum.

```ts {.line-numbers}
function sum_array(array: number[]): number {
  return array.reduce((a, b) => a + b, 0);
}
```

Type script is automatically going through the reduce method and inferring the type of the `a` and `b` variables.

And as the reduce function will return a typescript will not complain about the return type either.

If you don't know how the `reduce` function works you can read more about it [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce).

```ts {.line-numbers}
array.reduce((PreviousValue, currentValue) => {
  return Operation;
}, InitialValue);
```

> You can pass a function as an argument to the reduce function that will have the previous value and the current value as arguments and the function is expected to return a value after the operation has been performed and that will be the new previous value for the next iteration. And for initial value you can pass a value that will be the first value of the previous value.

Okay, Now I have a task for you all... Before seeing the answer below try to do it yourself.

- Make a function that takes 2 values as parameters.

- One is called `multiplier`. This parameter can be a number or a string.

- The other is called `values` and it is an array of numbers.

Your function should returns and array of numbers that are the result of multiplying the `multiplier` value with each value in the `values` array.

Try it out first then see the answer below.

```ts {.line-numbers}
function multiply_array(
  multiplier: number | string,
  array: number[],
): number[] {
  if (typeof multiplier === "string") {
    multiplier = Number(multiplier);
  }

  return array.map((num) => num * multiplier);
}
```

Did you get it right?

As we are setting multiple types for the `multiplier` we cannot directly multiply it with the values in the `values` array.

If you try it'll throw an error. So, you have to check if the `multiplier` is a number or a string and then convert it to a number if it is a string.

And if you look at the code. This is the reason why I didn't like `typescript` for so long. It's very easy to make it look very unreadable.

But if you have the basics down, you should be able to read it very quickly. But no matter how messy it looks, I like the way it forces me to fix all the small bugs that get's overlooked by me most of the time.

For example, Checking if the `parameter` is string or not. Most of the time on the flow of the code I don't check if the `parameter` is a string or not. But typescript will always remind me of these small mistakes that can cause problems later on and can be a headache to find and fix them.

## Onjects as parameters

As I've mentioned before it is best to make a type alias for an object.

But Just for a moment let's make a function that will take an object as a parameter that will have some information and the function will return a string with all the informations.

```ts {.line-numbers}
function info(user: {
  firstName: string;
  lastName: string;
  age: number;
}): string {
  return `${user.firstName} ${user.lastName} is ${user.age} years old`;
}
```

Looks very messy right? But what is the function return an object?

```ts {.line-numbers}
function info(user: { firstName: string; lastName: string; age: number }): {
  fullName: string;
  age: number;
} {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
  };
}
```

We also have to specify the return type after the function parameters.

This maked the code very clunky and almost unreadable. This is why aliases are very useful.

```ts {.line-numbers}
type User = {
  firstName: string;
  lastName: string;
  age: number;
};

function info(user: User): {
  fullName: string;
  age: number;
} {
  return {
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
  };
}
```

Now, the code looks much more readable.

We can clearly say that this function takes and object as a parameter that has the keys `firstName`, `lastName` and `age` and the function will return another object that has the keys `fullName` and `age`.

And inside the function everything will work as it should.

# Your practice task

Before ending this article let's bring all the knowledge together.

Your task is to create a function named processData that accepts two parameters:

- The first parameter, input, should be a union type that can be either a string or a number.
- The second parameter, config, should be an object with a reverse property of type boolean, by default it "reverse" should be false
  The function should behave as follows:

- If input is of type number, the function should return the square of the number.
- If input is of type string, the function should return the string in uppercase.
- If the reverse property on the config object is true, and input is a string, the function should return the reversed string in uppercase.

> Try it out first then see the answer below

```ts {.line-numbers}
function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false },
): string | number {
  if (typeof input === "string") {
    if (config.reverse) {
      return input.split("").reverse().join("");
    } else {
      return input.toUpperCase();
    }
  } else {
    return input * input;
  }
}
```

Did you get it right? Let me knwo in the comments.

# Final words

Soo, soo many things to do.

Happy coding!
