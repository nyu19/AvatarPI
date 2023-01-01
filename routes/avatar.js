const express = require('express')
const avatar= express.Router()
const color = require('../utils/color.js')
validateData = (data) => {
    let validData =  {
        name: "NU",
        fontface: "Arial",
        fontcolor: "",
        fontstyle: "",
        bgcolor: color.getRandomBackground(), 
        size: 128,
        fontsize: 0.45, 
        char: 2,
        rounded: false
    }
    
    if(data.name)
        validData.name = data.name
    if(data.fontface)
        validData.fontface = data.fontface
    if(data.bgcolor)
        validData.bgcolor = data.bgcolor
    if(data.fontcolor)
        validData.fontcolor = data.fontcolor
    else
        validData.fontcolor = color.getFontColor(validData.bgcolor)
    if(data.fontstyle)
        validData.fontstyle = data.fontstyle
    if(data.size)
        validData.size = parseInt(data.size)  
    if(data.fontsize)
        validData.fontsize = data.fontsize
    if(data.char)
        validData.char = data.char
    if(data.rounded)
        validData.rounded = data.rounded
    
    return validData
}

avatar.get('/avatar',(req,res) => {
    console.log("URL Queries:",req.query);
    let data = validateData(req.query)

    const lol = require('../utils/make-avatar.js')(data)
    res.status(200)
    res.end(lol)
})


module.exports = avatar