const tinycolor = require('tinycolor2')

module.exports = {
    getRandomBackground: () => {return require('tinycolor2').random().toHex()},
    getFontColor: (bgColor) => {
        let x = tinycolor(bgColor)
        if(x.isDark()){
            return x.brighten(75).toHex()
        }
        else{
            return x.darken(75).toHex()
        }
    }
    
    
} 