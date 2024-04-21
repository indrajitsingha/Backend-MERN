import express from "express";
const App = express()

const Port = process.env.PORT || 5000


App.get("/", (req, res) => {
    res.send("hello world!");
})
App.get("/api/jokes", (req, res) => {
    // fetch("https://official-joke-api.appspot.com/random_ten")
    fetch("https://official-joke-api.appspot.com/jokes/random")
        .then((response) => response.json())
        .then((response) => res.json(response))

})

App.listen(Port, () => {
    console.log("listening on port " + Port);
})

