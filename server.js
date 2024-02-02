require('dotenv').config()

const express = require('express'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    app = express(),
    PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, console.log('CONNECTED TO MONGODB'))

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.listen(PORT, console.log(`SERVER CONNECTED ON PORT ${PORT}`))