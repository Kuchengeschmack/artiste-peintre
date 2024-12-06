# Artiste-peintre

## Description 🔍

This project is an art portfolio. It is currently under construction.

## Motives 💡

I dedicate this project to improving on my knowledge so as to get updated with Angular's latest features.

I'm also trying to improve my workflow and try some technos : docker, editorconfig, prettier, eslint, nx, pnpm ... and get to know more on how Node.js serves an Angular app.

## How-to 🤔

### Install the project

You must have [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en) and [PnPM](https://pnpm.io/) installed on your PC.

Open a shell terminal and type :

```sh
# Clone the project
git clone https://github.com/Kuchengeschmack/artiste-peintre.git
# Go to project folder
cd artiste-peintre
# Install dependencies
pnpm install
```

### Serve the project over the local network

Open a shell terminal in the project folder and type :

```sh
# Launches a local Node server for the app
pnpm start
```

### Access the app

Open a web browser and go to the following address :

- On your computer via <http://localhost:4200>
- On your mobile over the local network via <http://192.168.X.Y:4200>

## Workflow 🤓

Branches are created from the `main` branch :

```sh
git switch main
git switch --create <new-branch>
```

Branches are then merged into `main` without fast-forward :

```sh
git switch main
git merge --no-ff <my-branch>
```

When ready, create a release using :

```sh
pnpm release
```

Follow the prompt and the `package.json` and `CHANGELOG.md` files shall be updated automatically and committed on the fly. The corresponding commit will be automatically tagged with version number.

You must use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) so that the changelog can be updated properly when running `pnpm release`.

## Feedback 🔂

Feel free to address any issues using the [_Issues_](https://github.com/Kuchengeschmack/artiste-peintre/issues) tab of this Github repo.
