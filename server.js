
const express = require("express");

const app = express(); //instance representing the backend server, listens to all requests

app.use(express.json()); //Middle Ware apparently
const users = [
    {id: 1, name: "User 1"},
    {id: 2, name: "User 2"},
    {id: 3, name: "User 3"}
]
//Define a route
app.get("/", (req, res) => {
    res.send("Hello, Anoop!")
})

app.get("/test", (req, res) => {
    res.json({
        "success": true,
        "message": "this is the test route"
    })
})

app.get("/users/:id", (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);

    if(userIndex === -1) {
        return res.status(404).json("User not found");

    }

    const filteredUser =users.filter((user) => user.id === userId);
    res.json(filteredUser);
})

app.get("/all-users", (req, res) => {
    res.json(users);
})



app.post("/users", (req, res) => {
    const newUser = req.body;
    const userId = users.length + 1;
    newUser.id = userId;
    users.push(newUser);
    res.status(201).json("New User Created!")
}
)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message:" Route not found"
    })
})
const port = 3000;
app.listen(port, () => {
    console.log("Server is running on port: ", port);
})
