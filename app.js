const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

/*======================================
| Allow cross-origin requests
=======================================*/
app.use(cors());

/*======================================
| MongoDB Setup
=======================================*/
mongoose.connect('mongodb://admin:abc123@ds143594.mlab.com:43594/graphql-db');
mongoose.connection.once('open', () => console.log('Connected to DB'));

/*======================================
| GraphQL Middleware
=======================================*/
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true // Enable a graphical interactive in-browser GraphQL IDE.
}));

/*======================================
| Start the server
=======================================*/
app.listen(9999, () => console.log('Listening at port 9999'));