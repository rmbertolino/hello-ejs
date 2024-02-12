const express = require('express')
const cors = require('cors')
const path = require('path')
const PORT = 3000
const expressLayouts = require('express-ejs-layouts')


const app = express()
app.use(express.static('public'))
app.use(cors())

// Set static folder
app.use(express.static('public'));

// Configurar el motor de plantillas EJS
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '..', 'views'))

app.get('/', (req,res) => {
    //res.send('<h3>Hello</h3>' + '<h3>World</h3>')
    const data = {
        message:'hello world',
        image_url: 'img/ejs.png',
        api_url: '/api/resurce',
        people: [
            {name: 'Dave'},
            {name: 'Sofia'},
            {name: 'Emma'}
        ],
        user: {
            name:'Rodolfo',
            admin:true
        },
        menu: [
            {
                menu:'Home',
                url: '/'
            },
            {
                name: 'About',
                url: ''
            }

        ]
    }
    

    const context = { layout: 'layouts/layout', data };

    res.render('pages/index', context)
})

app.get('/about',(req,res)=>{
    const data = { message:'About Page' }

    const params = {
        texto: 'Haz clic aquí',
        clase: 'btn-primary',
        url: '/accion'
    };
    
    const context = { layout : 'layouts/layout', data, params };

    res.render('pages/about', context)
})

app.get('/two-partials', (req,res) =>{
    const context = {
        layout : 'layouts/layout',
        dataPartial1: {
            name: 'Partial1'
        },
        dataPartial2: {
            name: 'Partial2'
        }
    }
    res.render('pages/two-partials', context)
} )

app.listen(PORT, ()=> console.log(`Listening on port: ${PORT}`))

