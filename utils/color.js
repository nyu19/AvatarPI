const tinycolor = require('tinycolor2')
const intensity = 50

module.exports = {
    getRandomBackground: () => {return require('tinycolor2').random().toHex()},
    getFontColor: (bgColor) => {
        let x = tinycolor(bgColor)
        if(x.isDark()){
            return x.brighten(intensity).toHex()
        }
        else{
            return x.darken(intensity).toHex()
        }
    }
    
    
} 