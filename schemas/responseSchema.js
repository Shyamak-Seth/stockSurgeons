const mongoose = require('mongoose'),
    reqString = {type: String}

const responseSchema = new mongoose.Schema({
    fullName: reqString,
    age: reqString,
    shortTerm1: reqString,
    shortTerm2: reqString,
    shortTerm3: reqString,
    shortTerm4: reqString,
    shortTerm5: reqString,
    longTerm1: reqString,
    longTerm2: reqString,
    longTerm3: reqString,
    longTerm4: reqString,
    longTerm5: reqString,
    totalAmount: reqString,
    shortTermAmount: reqString,
    shortTermPeriod: reqString,
    longTermAmount: reqString,
    longTermPeriod: reqString,
    others: reqString
})

module.exports = mongoose.model('responses', responseSchema)