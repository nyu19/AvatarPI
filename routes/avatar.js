const express = require('express')
const avatar= express.Router()


avatar.route('/avatar')
.get((req,res) => {
    console.log("URL Queries: " + req.query);
    res.status(200)
    const lol = require('../utils/make-avatar.js')()
    
    res.end(lol)
})


module.exports = avatar