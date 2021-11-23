const express = require('express');
const app = express();
const port = 3600;
const router = require('./routes/router');
const path = require('path');
const logger = require('./middleware/logger');


app.use(express.static(path.join(__dirname + '/public')));
app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(logger);
app.use(router);




app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})