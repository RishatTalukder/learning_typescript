# Typescript Fundamentals Part 2 (Objects and Functions)

I hope you like the first part. Now, let's learn about objects and functions. I you haven't read the please do so because there I did the whole setup.

As always, I'm `Md. rishat Talukder`. Let's try to learn Typescript together.

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
    name: 'Rishat',
    age: 22,
    isProgrammer: true
}
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
    name: 'Rishat',
    age: 22,
    isProgrammer: true
}
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
    name: 'Rishat',
    age: 22,
    // isProgrammer: true
}
```

Now, you can keep or remove the key `isProgrammer` as you like. This will check if there is a isProgrammer key and if there is it will be of type `boolean`. Otherwise typescript will not complain.

## Array of Objects

Now, what if there is an array of objects.

Let's say we have something like this.

```ts {.line-numbers}
let guiter = {
    brand: 'Gibson',
    isElectric: true,
    cost: 1000
}

let drums = {
    brand: 'Yamaha',
    cost: 500
}

let bass = {
    brand: 'Fender',
    cost: 300,
    isElectric: false
}


let instruments = [guiter, drums, bass]
```

Here, I have created three objects and put them inside an array.

How do we type annotate this?

First of all, let's annotate the objects.

```ts {.line-numbers}
let guiter: {
    brand: string
    isElectric: boolean
    cost: number
} = {
    brand: 'Gibson',
    isElectric: true,
    cost: 1000
}

let drums: {
    brand: string
    cost: number
} = {
    brand: 'Yamaha',
    cost: 500
}

let bass: {
    brand: string
    cost: number
    isElectric: boolean
} = {
    brand: 'Fender',
    cost: 300,
    isElectric: false
}
```

For, guiter and bass we have to add `isElectric` key and for drums we don't have to add it.

Now, how do we type annotate the array?

Normally we use `type[]` to specify an array.

But now each object is an object and each object has different types of values.

So, what we can do is add the object type along with a `[]` to make it an array of objects.

Like this.

```ts {.line-numbers}
let someObject: {key: string}[] = [
    someObject1,
    someObject2
]
```

But here we have to ensure that each object has the same type of values with exact same keys. But one problem is that the drums object does not have the `isElectric` key but the other two objects do have the `isElectric` key.

So, we use optional chaining.

```ts {.line-numbers}
let instruments: {
    brand: string
    isElectric: boolean
    cost: number
}[] = [guiter, drums, bass]
```

Here, I didn't make the isElectric optional and you should see that drums have a squiggle right below saying that `isElectric` key is not present in the drums object.

So, we can just make it optional.

```ts {.line-numbers}
let instruments: {
    brand: string
    // optional
    isElectric?: boolean
    cost: number
}[] = [guiter, drums, bass]
```

Now, there should be no errors. But one thing's that keeps on bugging me is the syntax. We have define a type of an object as `{}` and inside we have to specify the type of each key and we have to do it again and again for each object. This make the code look very messy and almost unreadable.

We have a way to make it more readable and less verbose.

## Type Aliases

This is a very useful feature of typescript. And I'll dedicated a whole article for it. For, now we can use `type aliases` make custom types. Mostly for commonly used types of the program.

We are writting the type of instrument object right? Each object has almost the same keys and types of values for each key. So, we can make this a new type.

```ts {.line-numbers}
type Instrument = {
    brand: string
    isElectric?: boolean
    cost: number
}
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
```

Now, as you can see we have a cleaner looking code.