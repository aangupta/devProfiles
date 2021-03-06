const express = require('express');
const api = require('./api');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static('public'));
app.use('/api', api);

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});
