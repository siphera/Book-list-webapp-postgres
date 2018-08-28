const express = require('express');
const mustacheExpress = require('mustache-express');
require('dotenv').config();

// console.log(process.env);

const app = express();

app.use(express.static('public'));

const mustache = mustacheExpress();
mustache.cache = null;
app.engine('mustache', mustache);
app.set('view engine', 'mustache');

app.get('/list', (req, res) => {
    res.render('list');
});


app.listen(process.env.PORT, () => {
    console.log('Listening on port 5006.');
});