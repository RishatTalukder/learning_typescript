# Typescript Fundamentals Part 3 (Aliases and Interfaces)

I hope you like the second part. Now, let's talk about aliases and interfaces.

As always, I'm `Md. Rishat Talukder`. Let's try to learn Typescript together.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_typescript)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

**Pre-requisites**

- Basic javascript knowledge
- Basic Node project structure knowledge
- Basic type annotation of typescript(part 1 and part 3 are required)

# Alias

We can do basic type annotations like,

```ts {.line-numbers}
age: number = 25;
```

It's not a problem at all right?

But what if we have to do something like this,

```ts {.line-numbers}
choices: 'rock' | 'paper' | 'scissors' = 'rock';
```

Or something like this,

```ts {.line-numbers}
person: {
    name: string;
    age: number;
    isProgrammer: boolean;
} = {
    name: "Rishat",
    age: 22,
    isProgrammer: true,
};
```

It's very wierd and hard to understand right? We are saying that `person` object will have a key `name` which is of type `string`, a key `age` which is of type `number` and a key `isProgrammer` which is of type `boolean`.

Then we have to assign the values to the keys.

And we have to do it again and again for each object.

This make the code look very messy and almost unreadable.

So, there is a very handy way to do it. We can make `aliases` for these types. Think of these as reusable type annotations. We can define a `type` once and use them over and over again.

```ts {.line-numbers}
type Person = {
    name: string;
    age: number;
    isProgrammer: boolean;
};

type Choices = 'rock' | 'paper' | 'scissors';

```

> we have to use the `type` keyword to define a type.

Now, we can use these `types` instead of writting down the same thing over and over again.

```ts {.line-numbers}
let person: Person = {
    name: "Rishat",
    age: 22,
    isProgrammer: true,
};

let choices: Choices = 'rock';
```

This is the power of aliases. 

Now, let's do a challange. 

**Challange**: Define two types `Teacher` and `Student`. The `student` type should have a `name` and `class` property and the `teacher` type should have a `name` and `subject` property.

- Your task is to define a function that takes a object of type `Teacher` or `Student` as a parameter and returns a string that says "Hello, <name>! You are a <teacher or student>".

Try to do this yourself first. Then see the answer below.

**Solution**: Declairing the types can be done easily with `type` keyword. In the function we can check if the object has a `class` or `subject` property and return the appropriate string.

```ts {.line-numbers}
type Teacher = {
    name: string;
    subject: string;
};

type Student = {
    name: string;
    class: number;
};

function greet(person: Teacher | Student): string {
    if ('class' in person) {
        return `Hello, ${person.name}! You are a student in class ${person.class}.`;
    } else {
        return `Hello, ${person.name}! You are a teacher of ${person.subject}.`;
    }
}