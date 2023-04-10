# Argent Bank - FrontEnd

This repo contains all the source code to run the user interface for the sports analytics dashboard Sportsee.


## 1. Project

### 1.1 Prerequisites

- [NodeJS (**version 18.14**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, we recommend you install [nvm](https://github.com/nvm-sh/nvm). This tool will allow you to easily manage your NodeJS versions.

### 1.2 Launching the project

- The `yarn` command will allow you to install the dependencies.
- The `yarn dev` command will allow you to run the micro API.
- Go to http://localhost:5173 in your favorite Web browser

### 1.3 Environment Variables

To use the micro API with the user interface, you need to follow the following steps:

- Copy the `.env.example` file and rename it to `.env`.
- Open the `.env` file and add the following line: `VITE_API_URL="http://localhost:3001/api/v1"`.  
  This sets the `VITE_API_URL` environment variable to the URL of your micro API. If your micro API is running at a different URL, replace http://localhost:3001/api/v1 with the appropriate URL.
- Save the .env file.
- Restart the server by pressing `h` then `r`.

## 2. Documentation

The JSDOC documentation can be found in the `docs` folder. This documentation provides detailed information on each component, directive, and service used in the project. It can be helpful for developers who want to contribute or understand the internal workings of the application.