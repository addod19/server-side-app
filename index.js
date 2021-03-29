// index.js

/**
 * Required External Modules
 */

const express = require('express');
const path = require('path');


/**
 * App Variables
 */

const app = express();
const port = process.env.PORT || '8000';

/**
 *  App Configuration
 */

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes Definitions
 */

app.get('/', (req, res) => {
  // res.status(200).send('DanFood: Food for full stack developers');
  res.render('index', { title: 'Home'});
});

app.get('/user', (req, res) => {
  res.render('user', { title: 'Profile', userProfile: 'Auth0'});
});

/**
 * Server Activation
 */

app.listen(port, () => {
  console.log(`Listening to request on http://localhost:${port}`);
});