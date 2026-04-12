# Typescript Fundamentals

I was doing a project and it was becomeing pretty big and as the variables started to get a bit out of hand, I thought there should be a better way to do it. Someone recommended Typescript. Now, believe it or not, I'm a total nob in javascript. So, why not challenge myself and learn Typescript and see if it's that good?

As always, I'm `Md. rishat Talukder`. Let's try to learn Typescript together.

- [LinkedIn](https://www.linkedin.com/in/pro-programmer/)
- [YouTube](http://www.youtube.com/@itvaya)
- [gtihub](https://github.com/RishatTalukder/Machine-Learning-Zero-to-Hero)
- [Gmail](talukderrishat2@gmail.com)
- [discord](https://discord.gg/ZB495XggcF)

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