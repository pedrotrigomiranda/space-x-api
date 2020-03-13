const express = require('express');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const colors = require('colors');
const schema = require('./schema');

const app = express();

// Allow cross-origin
app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server started on port: ${PORT}`.yellow.bold)
);
