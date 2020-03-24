# SpaceX API Launches

This app fetches selected data from the Space-X API and displays it in a list of Launches. Each launch has its own page with further details.

## The following technologies and frameworks were used to build this app

> React, GraphQL, Apollo app that uses the SpaceX API to display launches

## Npm dependencies

> Axios, Concurrently, Cors, Express, Express-graphql, Graphql, Colors

## How to get the app running

```bash
# Clone project
git clone
cd space-x-api

# Install dependencies (server & client)
npm install
cd client && npm install

# Run server & client (:8080 & :3000)
npm run dev

# Server only (:8080)
npm run server

# Client only (:3000)
npm run client

# Build for production (Builds into server ./public)
cd client && npm run build

# Graphiql - http://localhost:5000/graphql
```

### Author

Pedro Trigo Miranda

### License

This project is licensed under the MIT License
