# Inbest Tech Homework Assessment

## Table of Contents

1. [Overview](#overview)
2. [Setup Instructions](#setup-instructions)
    - [Prerequisites](#prerequisites)
    - [Run Development Server](#a-run-development-server)
    - [Run Production Build](#b-run-production-build)
3. [Features](#features)
4. [Implementation Details](#implementation-details)
    - [Technologies Used](#technologies-used)
    - [Project Structure](#project-structure)
5. [Other Information](#other-information)

## Overview

The Postcode Information Retrieval App is a basic ReactJS application designed to facilitate the submission and retrieval of information about UK postcodes. It interacts with the postcodes.io API service to fetch data such as country, longitude, latitude, and administrative district based on the user-provided postcode. Additionally, the app maintains a history of submitted postcodes, allowing users to access previous submissions easily.

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
`npm start`
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

## Features

1. **Submit UK Postcode**: Users can input a UK postcode into the application.
2. **Retrieve Postcode Information**: The app fetches information from the postcodes.io API using the provided postcode.
3. **Display Information**: Details including country, longitude, latitude, and administrative district are presented to the user.
4. **View Postcode History**: The app keeps track of submitted postcodes for reference.
5. **Select Postcode from History**: Users can select a postcode from the history list to view its details.
6. **Remove Postcode from History**: Users have the option to delete a postcode from the history list.

## Implementation Details

### Technologies Used

- **React**: Utilized for building the user interface and managing state.
- **Redux**: Employed for efficient state management, particularly for handling postcode history.
- **Axios**: Used for making HTTP requests to the postcodes.io API.
- **MUI**: Material-UI components were used for styling the application.

### Project Structure

The project follows a typical ReactJS project structure:

- **public/**: Contains public assets like HTML files.
- **src/**
  - **api/**: Contains service functions for handling API requests.
  - **assets/**: Holds static assets like images and stylesheets.
  - **components/**: Contains React components used in the application.
  - **pages/**: Houses the main pages of the application.
  - **redux/**: Holds Redux related files for managing application state.
  - **utils/**: Houses utility functions used across the application.
  - **App.tsx**: Entry point of the application.
  - **index.tsx**: TypeScript entry point for the React application.

## Other Information

- **Author**: [Kernius Survila](https://github.com/KerniusSur)
