const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index');
});

app.get ('/scientific', (req, res) => {
    res.render('scientific');
});

app.listen(port, () => {
    console.log('Server is running on http://localhost3000');
});