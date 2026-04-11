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