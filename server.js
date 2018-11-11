const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

// setting up static files in express
app.use(express.static(path.join(__dirname, 'app/public')));

require('./app/routing/api-routes.js')(app);
require('./app/routing/html-routes.js');

app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});