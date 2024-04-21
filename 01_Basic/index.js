console.log("Backend started");
const express = require('express')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get("/socialMeadia", (req, res) => {
    res.json({
        "facebook": "facebook.com",
        "twitter": "twitter.com"
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})