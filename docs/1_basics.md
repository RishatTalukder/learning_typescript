# Typescript Fundamentals Part 1

I was doing a project and it was becomeing pretty big and as the variables started to get a bit out of hand, I thought there should be a better way to do it. Someone recommended Typescript. Now, believe it or not, I'm a total nob in javascript. So, why not challenge myself and learn Typescript and see if it's that good?

As always, I'm `Md. rishat Talukder`. Let's try to learn Typescript together.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/learning_typescript)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

**Pre-requisites**
- Basic javascript knowledge
- Basic Node project structure knowledge

# The setup

You must need a code editor. I'm using [VS Code](https://code.visualstudio.com/). You can use whatever you want. But as I'm using vs code I'll be giving information about VS code like what extension to install or what command to use.

You also need `node` installed. You can install it from [here](https://nodejs.org/en/download/).

Now run the following command.

```bash
npm install -g pnpm@latest-10
```

This will install `pnpm` latest version.

Now what is `pnpm`, you ask?

It is a package manager for node. By default `npm` is used for node packages. But it sometime can bloat your project and through very weird errors. So, we use `pnpm` instead.

It is a fast and reliable package manager with lightning-fast installation speeds and a smarter, safer way to manage dependencies as stated in their [official website](https://pnpm.io/).

Now that you have `pnpm` installed, run the following command.

Let's make a vanilla typescript project.

> by vanilla I mean no frameworks just raw typescript.

```bash
pnpm create vite
```

You'll be prompted some questions like your project name, what kind of project do you want to create, etc.

Name your project and select vanilla typescript by pressing the up or down arrow keys and then pressing enter to create the project.

Vite is a very powerful and very fast frontend build tool that provides a lot of features like hot module reloading, live reload, and more out of the box and has support for various frameworks and libraries.

After running the command you should see a new folder created in your current directory. Click on it and you should see a folder structure like this.

```
├── public
├── src
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

We don't do anything in the `public` folder. All our code will go in the `src` folder.

`index.html` is the main HTML file of our project. It's the entry point of our project.

Package.json contains all the information about the dependencies of our project.

`vite.config.ts` is the configuration file of vite.

`tsconfig.json` is the configuration file of typescript. We will come back to it later.

Now, open the `console` again and cd into your project folder and run the following command.

```bash
pnpm install
```

This will install all the dependencies of our project. You can see a new folder is made inside the project folder named `node_modules`. This folder contains all the dependencies of our project.

Now, type:

```bash
pnpm dev
``` 

in the console and this will start the live server for `vite+typescript`. 

While the server is running you can type `o` in the console and this will open the project in your default browser. 

![alt text](image.png)

Now that you have the server running, you can start coding.

Before we get started, some information about typescript.

It is a `transpiled` language. That means it will be compiled to javascript. More accurately anything we write in typescript will be `translated` to javascript. 

It'll force us to write type safe code by using type annotations so that we can catch errors before they happen.

> Somebody once told me that typescript is more of a vs code extension than a language.

Enough chitchat, let's get on to business.

# Type Annotation

First make a new file named `annotations.ts` in the `src` folder.

> every typescript file must end with `.ts` extension.

Now, import it in the `main.ts` file.

```ts {.line-numbers}
import "./annotations.ts";
```

At the very top. don't touch anything else.

Now, let's start coding. In the `annotations.ts` file let's log something.

```ts {.line-numbers}
// 1_basics/src/annotations.ts
console.log('helloooo!!!');
```

Start the server if it is not already running and open it in your browser.

Now if you open the console in the browser you should see that `helloooo!!!` is printed in the console.

And yes you can write normal javascript code but there'll be some catches.

Now, let's talk about type annotations.

Type annotations are used to tell typescript what the type of the variable is. 

```ts {.line-numbers}
// 1_basics/src/annotations.ts
let name: string = 'Rishat';

console.log(name);

```

Here, I'm declaring a variable `name` and to tell typescript what type of variable it is I'm using the `:` symbol followed by the type of the variable.

Then as ususal the assignment operator is used to assign a value to the variable.

Now what is the benefit of this. Try to change the value of `name` to a number and see what happens.

```ts {.line-numbers}
// 1_basics/src/annotations.ts
let name: string = 'Rishat';

console.log(name);

name = 1;
```

You should see vs code red underline on the `name = 1;` line right away. 

You can log the name variable in the console and see everything is running fine because it is translated into javascript but vs code will show you the error that `you cannot assign a number to a string variable.`

This is help ful because now we can clearly see the type of the variable and we have to stick to it.

> So, type script is manually turning a high level dynamic language into a statically typed language.

Even though everything will run fine in the browser, it's a good idea to use type annotations to make your code more type safe while coding.

There are other basic types like `number` and `boolean`.

Let's try `number` now.


```ts {.line-numbers}
// 1_basics/src/annotations.ts
let age: number = 25;

// age = 'Rishat';
```

This will also throw an error like before. 

Type annotations has one handy ability. After annotating a variable you can now will now get all the methods that are available for that type. Just add a `.` operator after the variable name and you will be shown a list of all the methods that are available for that type only.

But typescript is also a very smart language. It can `infer` the type of the variable based on the value that is assigned to it, even if you don't specify the type.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let isStudent = true;

isStudent = 10;

```

Here I'm assigning a boolen value to the variable `isStudent` and look how I didn't specify the type but still there will be a error underline below the `isStudent = 10;` line telling you that you cannot assign a number to a boolean variable.

And this is called `type inference`. It is a feature of typescript that allows us to infer the type of the variable.

But this is not a good idea. It can also cause some weird errors. 

Now, one last thing about typescript even though while development you can render with errors, but in production typescript will not compile your code until all the type errors are resolved.

And if you cannot compile/build the code you cannot serve or deploy it.

So, always remember to fic all the errors before building the code.

## Union Types

We know that we can specify the type of the variable but what if we want to specify `multiple types` for the variable.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let age: number | string = 25;

age = '25';

age = 10;
```

Here, using the `|` operator we can specify multiple types for the variable. We are actually saying that the variable can be of type `number` or `string`. `|` is a `or` operator for combining multiple types.

> Try to assign a boolean value to the variable and see what happens. You shoud see an error.

One cool thing about typescript is that not only that you can specify multiple types for the variable but you can specify `multiple values or variables` as types for the variable. This might seem confusing but let's say you have a request state variable.

You can have `pending`, `resolved`, `rejected` as types for the variable.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let requestState: 'pending' | 'resolved' | 'rejected' = 'pending';

requestState = 'resolved';

requestState = 'rejected';

requestState = 'something else';
```

Here, I'm specifying that the variable can be one of the three values. `pending`, `resolved`, `rejected` and if you try to assign something else to the variable you will get an error.

And One weird thing about typescript is that you can also specify `any` type for the variable.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let age: any = 25;

age = '25';

age = 10;

age = true;
```

> any is actually what it sounds like this will tell ts that this variable can be of any type. 

This is almost like raw js. If you don't want typescript linting to complain about the type of the variable you can use `any` type.

But be careful because using `any` type can cause a lot of problems. Because this one single variable can spread like wildfire. And before you knwo it every single variable in your code can become the `any` type.

# Array Types

Let's make a program to find a number in an array.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let numbers = [1, 2, 3, 4, 5];

let index;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

console.log(index);
```

Very straight forward program. But this is purely javascript. No type annotations. But this will work fine.

I want you to hover over every index of the array if you are using vs code. 

You should see every variable has it's type inferred by typescript.

This is nice right? 

Now let's start specifying the types of the variables ourselves.

Fist let's specify the type of the `index` variable.

Index clearly should be a number right?

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let numbers = [1, 2, 3, 4, 5];

let index: number;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

console.log(index); // This will throw an error
```

What's happening there? In the last line where we are logging the `index` variable you should see that a error is thrown.

Why is that? I told you before typescript is pretty smart. If you think about it did we ever set a value for the `index` variable?

And what happends if we don't a value for the `index` variable?

It'll stay undefined right?

This is what's happening here. Typescript is inferring the type of the `index` variable based on the value that is assigned to it which is undefined at start and of you log inside the if statement inside the for loop there won't be any errors because we are setting a value inside the if statement. But outside it can still be undefined.

So, the real type of the `index` variable is `number | undefined`.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let numbers = [1, 2, 3, 4, 5];

let index: number | undefined;

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

console.log(index);
```

Another cool thing here is that. If you try to access the `index` variable methods that are available for the `number` type it will work fine but it'll automatically put a `?` after the variable name. This is called optional chaining. 

So, that you don't get any errors if the `index` variable is undefined. Try to use a method of number type and you should see a optional chaining added automatically.

Now, we can specify the type for the `i` variable of the `for loop`.

```ts {.line-numbers}
...

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

...

```

There is no chance that `i` variable will be undefined. So, we can specify the type as `number`.

> Yes you can write vanilla js code and because of type inference most of the time there should be no errors.

There's one last variable left.

`numbers` is an array of numbers.

First let's try an empty array without type annotations.

```ts {.line-numbers}

let array = [];

```

Now, hover over the `array` variable.  You'll see that it is of type `any[]`.

> `[]` is a type annotation for an array. And if you want to say what type of array it is you can specify it by `typename[]`. 

So, by default an empty array is treated as a array where any type of value can be assigned to it.

So, now let's assugn a type for the array.

```ts {.line-numbers}

let array: number[] = [1,2,3,4];

```

This will turn the `array` variable into a array where only numbers can be assigned to it.

Try to put something other than a number in the array and you will get an error.

```ts {.line-numbers}

let array: number[] = [1,2,3,4,'something else'];

```

It'll throw an error. You cannot do that. Now, what if you want to have an array where only strings and numbers can be assigned to it?

```ts {.line-numbers}

let array: (string | number)[] = [1,2,3,4,'something else'];

```

You can `|` to specify multiple types and after that add a `[]` to make it an array.

Now, this will persist even when you use a array method like `push` you can see that anything other than a number or string will throw an error.

Well, let's now add the type for `numbers` variable.

```ts {.line-numbers}
// 1_basics/src/annotations.ts

let numbers: number[] = [1, 2, 3, 4, 5];

let index: number | undefined;

for (let i: number = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        index = i;
        break;
    }
}

console.log(index?.toFixed(2));
```

That's the basics type annotation in typescript. 

# Final words

This is kinda fun. Next article we will talk about objects and function typings.