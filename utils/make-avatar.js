module.exports = (data) => {
    
    // let data = {
    //     name: "NU",
    //     fontface: "Arial",
    //     fontcolor: "5bb435",
    //     fontstyle: "",
    //     bgcolor: color.getRandomBackground(), 
    //     size: 512,
    //     fontsize: 0.45, 
    //     char: 2,
    //     rounded: false
    // }
    // data.fontcolor = color.getFontColor(data.bgcolor)
    
        
    const color = require('./color.js')
    const fs = require('node:fs')
    const canvas = require('canvas').createCanvas(data.size,data.size)
    const ctx = canvas.getContext("2d")
    
    ctx.fillStyle = '#' + data.bgcolor 
    
    if(data.rounded){
        ctx.arc(data.size/2,data.size/2,data.size/2,0,Math.PI*2)
        ctx.fill()
    }
    else{
        ctx.fillRect(0,0,data.size,data.size)
    }

    ctx.font = `${data.fontstyle} ${Number(data.size)*Number(data.fontsize)}px ${data.fontface}`
    ctx.fillStyle = '#' + data.fontcolor
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillText(data.name,data.size/2,data.size/2)
    
    
    fs.writeFileSync("./img.png",canvas.toBuffer("image/png"))
    // console.log(data);
    // return canvas.toDataURL()
    return canvas.toBuffer()

}