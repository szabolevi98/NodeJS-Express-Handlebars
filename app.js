const express = require('express');
const app = express();
const exphbs = require('express-handlebars')
const favicon = require('serve-favicon'); 

const hbs = exphbs.create({
    defaultLayout: 'main',
    helpers: {
        ifEquals: function(arg1, arg2, options) {
            return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
        }
    }
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(favicon(__dirname + '/public/favicon.ico'));

const companyName = 'Example Name';
const currentYear = new Date().getFullYear();

app.get('/', (req, res) => {
    res.render('index', { 
        title: companyName + ' - Lorem Ipsum',
        style: 'index.css',
        copyRight: {
            name: companyName,
            year: currentYear
        }
    });
});

app.get('/work', (req, res) => {
    res.render('work', { 
        title: companyName + ' - Házi feladat',
        style: 'work.css',
        copyRight: {
            name: companyName,
            year: currentYear
        },
        lists: [
            {
                items: [ 'item1', 'item2', 'item3' ],
                elements: [ 'element1', 'element2', 'element3' ]
            },
            {
                items: [ 'item4', 'item5', 'item6' ],
                elements: [ 'element4', 'element5', 'element6' ]
            }
        ]
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', { 
        title: companyName + ' - Kapcsolat',
        style: 'contact.css',
        copyRight: {
            name: companyName,
            year: currentYear
        }
    });
});

app.get('/about', (req, res) => {
    res.render('about', { 
        title: companyName + ' - Rólunk',
        style: 'about.css',
        copyRight: {
            name: companyName,
            year: currentYear
        }
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log('Server is starting at port: ' + port)
});
