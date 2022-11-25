const express = require('express')
const app = express()
const PORT = 3000

app.use('/api',require("./routes/avatar.js"))


app.listen(PORT,() => {
    console.log('🚀 Express server running on http://localhost:' + PORT + '/')
})