import express, { response } from "express"

const app = express();

// GET
app.get("/", (request, response) => {
    return response.send("Hello, this is my first request on back-end!")
})

// POST
app.post("/post", (request, response) => {
    return response.json({
        message: "This message is for my first POST request"
    })
})

app.listen(3001, () => console.log("Server running on port 3001"))