// Import Express.js
const express = require('express');
const routes = require('./routes');

// import sequelize connection
const sequelize = require('./config/connection');

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Send all the requests to the index.js in the routes folder
app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
