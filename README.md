# Inbest Tech Homework Assessment

## Table of Contents

1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Run Development Server](#a-run-development-server)
    - [Run Production Build](#b-run-production-build)
3. [Implementation Details](#implementation-details)
    - [Routes](#routes)
    - [Features](#features)
    - [Main Libraries Used](#main-libraries-used)
    - [Project Structure](#project-structure)
    - [Redux Store](#redux-store)
4. [Other Information](#things-i-believe-are-important-to-mention)
    - [API Configuration](#1-api-configuration)

## Overview

This is a basic React application designed to facilitate the submission and retrieval of information about UK postcodes. It interacts with the postcodes.io API service to fetch data such as country, longitude, latitude, and administrative district based on the user-provided postcode. Additionally, the app maintains a history of submitted postcodes, allowing users to access previous submissions easily.

## Setup Instructions

### *Prerequisites:*

Follow the steps below to set up the project on your local machine:

#### 1. Clone the repository

```bash
git clone git@github.com:KerniusSur/Inbestai-Task.git
```

#### 2. Navigate to the project directory

```bash
cd Inbestai-Task
```

#### 3. Install dependencies

```bash
npm install
```

### *a. Run development server:*

#### 1. Start the development server

```bash
npm run dev
```

### *b. Run production build:*

To build the application for production and run it, use the following commands:

#### 1. Build the application

```bash
npm run build
```

#### 2. Serve the application

```bash
npx serve -s build
```

#### Open your web browser and visit `http://localhost:3000` to access the application

## Implementation Details

### Routes

The application has *two* main routes:

- **/**: The [home route](http://localhost:3000) where users can input a postcode and view its details.
<!-- - **/history**: The [history route](http://localhost:3000/history) where users can view and manage their postcode history. -->

### Features

1. **Submit UK Postcode**: Users can input a UK postcode into the application.
2. **Retrieve Postcode Information**: The app fetches information from the postcodes.io API using the provided postcode.
3. **Display Information**: Details including country, longitude, latitude, and administrative district are presented to the user.
4. **View Postcode History**: The app keeps track of submitted postcodes for reference.
5. **Select Postcode from History**: Users can select a postcode from the history list to view its details.
6. **Remove Postcode from History**: Users have the option to delete a postcode from the history list.

### Main Libraries Used

- **React**: Utilized for building the user interface and managing state.
- **Redux**: Employed for efficient state management, particularly for handling postcode history.
- **Axios**: Used for making HTTP requests to the postcodes.io API.
- **MUI**: Material-UI components were used for styling the application.
- **React Router**: Used for routing within the application.
- **ESLint & Prettier**: Used for code linting and formatting.
- **TypeScript**: Used for static type-checking and improved code quality.

### Project Structure

The project follows a typical ReactJS project structure:

- **.github/**: Contains a basic GitHub Actions workflow for easier maintenance.
- **public/**: Contains public assets like HTML files.
- **src/**
  - **api/**: Contains service functions for handling API requests.
  - **assets/**: Holds static assets like images and stylesheets.
  - **components/**: Contains React components used in the application.
  - **constants/**: Houses constant values used across the application.
  - **hooks/**: Contains custom hooks used in the application.
  - **layouts/**: Contains layout components used in the application.
  - **models/**: Contains TypeScript interfaces used in the application.
  - **pages/**: Houses the main pages of the application.
  - **store/**: Holds Redux related files for managing application state.
  - **theme/**: Contains theme configuration for the Material-UI components.
  - **utils/**: Houses utility functions used across the application.
  - **App.tsx**: Entry point of the application.
  - **index.tsx**: TypeScript entry point for the React application.

### Redux Store

The application uses Redux for state management. The store is described and configured in the `store/` directory and includes the following:

- **store/**
  - **modules/**: Contains Redux modules.
    - **postcode/**: Contains the postcode module, which handles the history of submitted postcodes.
      - **actions.ts**: Contains action creators for the postcode module.
      - **slice.ts**: Contains the slice for the postcode module.
    - **toast/**: Contains the toast module, which handles toast notifications.
      - **actions.ts**: Contains action creators for the toast module.
      - **slice.ts**: Contains the slice for the toast module.
    - **configureStore.ts**: Configures the Redux store.
- **postcodes.ts**: Contains the easily accessible selectors for the postcode module.
- **toasts.ts**: Contains the easily accessible selectors for the toast module.

### Scripts

The project includes the following scripts:

```bash
  npm run dev    # Start the development server
```

```bash
  npm start      # Start the development server (alternative to 'dev')
```

```bash
  npm run build  # Build the application for production
```

```bash
  npm run eject  # Eject the application
```

```bash
  npm run lint   # Run the linter
```

## Other Information

<!-- ### Things I would have done differently -->
<!-- ### Things I would have liked to add -->
### Things I believe are important to mention

#### 1. **API configuration**

`http-client.ts` is an Axios instance configuration that is used to make requests to the postcodes.io API. The base URL is set to `https://api.postcodes.io/` and can be easily modified if needed.

`data-contracts.ts` contains the interfaces used to define the structure of the API response.

`PostCodes.tsx` contains the service functions used to interact with the API.

`ApiCreator.ts` is a factory function that creates an instance of the Axios client, sets up interceptors and returns the client.

<br/>

***Note:*** This type of setup is useful for handling API requests in a more organized and efficient manner in bigger applications, maybe this is more complex, than necessary for this kind of project, however, I this opens up the possibility to easily expand the application in the future.

<br/>

### **Author**

### [Kernius Survila](https://github.com/KerniusSur)
