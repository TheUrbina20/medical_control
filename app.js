const express = require('express');
const path = require('path')
const app = express();
const port = 3000;
const Patient = require('./app/src/Patient')

app.use(express.static('app/public'));
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/app/public/views'));


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/patients/new', (req, res) => {
  res.render('patients/new');
});

app.post('/patient', (req, res) => {
  console.log(req.body)
});
 
app.listen(port, process.env.IP, () => {
  console.log(`IMDB server has started in ${port}`);
});
