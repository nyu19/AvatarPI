module.exports = () => {
    const color = require('./color.js')

    let data = {
        name: "NU",
        fontface: "Arial",
        fontcolor: "5bb435",
        fontstyle: "",
        bgcolor: color.getRandomBackground(), 
        size: 128,
        fontsize: 0.33, 
        char: 2,
        rounded: true
    }
    data.fontcolor = color.getFontColor(data.bgcolor)
    console.log(data);
    const fs = require('node:fs')
    const canvas = require('canvas').createCanvas(data.size,data.size)
    const ctx = canvas.getContext("2d")

    ctx.fillStyle = '#' + data.bgcolor 
    ctx.fillRect(0,0,data.size,data.size)
    ctx.font = `${data.fontstyle} ${Number(data.size)*Number(data.fontsize)}px ${data.fontface}`
    ctx.fillStyle = '#' + data.fontcolor
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(data.name,data.size/2,data.size/2)


    fs.writeFileSync("./img.png",canvas.toBuffer("image/png"))
    // return canvas.toDataURL()
    return canvas.toBuffer()

}