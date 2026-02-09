# Mini Message Board

A lightweight message board application built with Express.js and EJS to practice backend fundamentals and MVC architecture.

## Features

-  Create and view messages
-  Display message author and timestamp
-  View individual message details
-  In-memory data storage (no database required)

## Tech Stack

- **Backend:** Node.js, Express.js
- **Templating:** EJS
- **Architecture:** MVC (Model-View-Controller)

## Project Structure
```
mini-message-board/
├── data/              # In-memory data storage
├── controllers/       # Request handling logic
├── routes/            # URL routing
├── views/             # EJS templates
└── app.js             # Application entry point
```


## Usage

- Visit `/` to see all messages
- Click "New Message" to create a message
- Click on any message to view details

## Learning Goals

This project demonstrates:
-  Express routing and middleware
-  MVC architectural pattern
-  POST-Redirect-GET pattern
-  EJS templating
-  Form handling with `express.urlencoded()`
-  RESTful route design