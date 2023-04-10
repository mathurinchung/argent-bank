# [ Argent Bank ] Connect to a Back End with an API using React

Develop a complete and responsive web application using React for Argent Bank, to allow customers to log in, manage their accounts, and profiles. This application should use Redux to manage global state and leverage the API endpoints already created by the backend engineers. The first phase of the project involves user authentication. The second phase of the project involves specifying the necessary API endpoints for transactions, which will allow users to view, add, edit, or delete transaction information. The document describing the APIs for transactions should be provided following Swagger guidelines.

## Features

* Creation of a complete and responsive web application using React, based on the provided HTML and CSS for the homepage, login page, and profile page.
* Use of Redux for managing the state of the entire application.
* Implementation of the following functionalities (see GitHub issues templates for more details):
  * User can visit the homepage
  * User can log in to the system
  * User can log out of the system
  * User can only view information related to their own profile after successfully logging in
  * User can modify their profile and save the changes in the database.

## Prerequisites

Before getting started, make sure you have **Node.js** and **Yarn** installed on your machine.

- [NodeJS (**version 18.14**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

## Technologies Used

The frontend uses the following technologies:

- [React](https://react.dev/)
- [React Router](https://reactrouter.com/en/main)
- [Axios](https://axios-http.com/fr/docs/intro)
- [Recharts](https://recharts.org/en-US/)
- [Sass](https://sass-lang.com/)

The backend uses the following technologies:

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)

## Installation

Clone the repository using the --recurse--submodules option to include the backend submodule:

- `git clone --recurse-submodules git://github.com/mathurinchung/argent-bank.git`
- `cd sportsee`

Note: Follow the specific installation instructions in the README.md files for the backend and frontend directories.

## Addition Information

The backend uses PORT 3001 by default and the frontend uses PORT 5173 by default.
