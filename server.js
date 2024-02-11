require('dotenv').config()

const express = require('express'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    app = express(),
    PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI, console.log('CONNECTED TO MONGODB'))
const Responses = require('./schemas/responseSchema')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json({limit: '1mb'}))
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/', async (req, res) => {
    const {fullName, age, shortTerm1, shortTerm2, shortTerm3, shortTerm4, shortTerm5, longTerm1, longTerm2, longTerm3, longTerm4, longTerm5, totalAmount, shortTermAmount, shortTermPeriod, longTermAmount, longTermPeriod, others} = req.body
    const newResponse = new Responses({fullName, age, shortTerm1, shortTerm2, shortTerm3, shortTerm4, shortTerm5, longTerm1, longTerm2, longTerm3, longTerm4, longTerm5, totalAmount, shortTermAmount, shortTermPeriod, longTermAmount, longTermPeriod, others})
    console.log(newResponse)
    await newResponse.save()
    res.redirect('/')
})

app.get('/admin', async (req, res) => {
    res.render('admin')
})

app.get('/admin/redirect/verify/RD7fDi6rDaRD7fDi6rDa', async (req, res) => {
    const responsesAll = await Responses.find()
    res.render('adminPortal', {responsesAll})
})

app.get('/admin/:id', async (req, res) => {
    const foundResponse = await Responses.findById(req.params.id)
    res.render('singleResponse', {foundResponse})
})

app.listen(PORT, console.log(`SERVER CONNECTED ON PORT ${PORT}`))