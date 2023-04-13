<h1 align="center">
  <br>
  <a href="https://github.com/Youssef-kobi/MERN-Template"><img src="https://raw.githubusercontent.com/Youssef-kobi/MERN-Template/main/client/public/Logo.png" alt="MERN" width="200"></a>
  <br>
  MERN Authentication's Template
  <br>
</h1>

<h4 align="center">An updated MERN/Auth <a href="https://github.com/Youssef-kobi/MERN-Template" target="_blank">Template</a>.</h4>

<p align="center">
 <a href="https://img.shields.io/npm/v/npm?style=plastic"><img src="https://img.shields.io/npm/v/npm?style=plastic" alt="npm version" height="18"></a>
</p>

<p align="center">
	<a href="#introduction">Introduction</a> •
  <a href="#key-features">Key Features</a> •
  <a href="#to-do">TO-DO</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#license">License</a>
</p>

<!-- ![screenshot](https://raw.githubusercontent.com/amitmerchant1990/electron-markdownify/master/app/img/markdownify.gif) -->

## Introduction

This project is a MERN template for building fullstack JavaScript applications. The technology stack is as follows:

- **MongoDB** as a NoSQL database
- **React** for the front-end, bootstrapped with "Create React App".
- **Express.js** for the server
  - Serves the React app
  - Provides the JSON API for the React app using http
- **Node.js** for the back-end

## Key Features

<img align="right"  width="220" height="400" src="https://user-images.githubusercontent.com/52678976/190696479-54fcb58b-ece0-49d4-b469-b37c0c16b45f.PNG" alt="Files Structure"/>

- MERN structured folders
- TailwindCSS setup
- ES7 Airbnb eslint / prettier
- Axios for API fetching
- React-toastify for Toast notification
- React-hook-form for form management
- Yup (frontend & backend)for Forms validation
- @hookform/resolvers to use yup with react-hook-form
- React-router-dom V6, route restrictions: PrivateOutlet & PublicOutlet
- Responsiveness 70%
- Pages: Login, Registration, ForgetPassword, NotFound, Dashboard(empty)
- Authentication using JWT with verification middleman in the serve routes
- React Context for LoggedInUser data and login/logout functions

## TO-DO

- Dark/Light mode
- Responsiveness 30%
- Mailing service for user account verification & reset password
- Profile Page ?
- Google / Facebook / Twitter Authentication


## How To Use

### Use Template

To use this template click `Use this template` above. see <a href="https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template#creating-a-repository-from-a-template" >How to create a new repository from a template<a/>,

### Fork repository

You might fork the repository by clicking the fork button. see <a href="https://docs.github.com/en/get-started/quickstart/fork-a-repo#use-someone-elses-project-as-a-starting-point-for-your-own-idea" >Use someone else's project as a starting point for your own idea.<a/>

You'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone <the created repository name>

# Go into the repository
$ cd <the created repository name>

# Install dependencies
$ npm install

# Run the app
$ npm start
```

> **Note**
> Don't forget to change the `author` and `name` in your client(frontend) `package.json` ;)

---

## License

MIT
