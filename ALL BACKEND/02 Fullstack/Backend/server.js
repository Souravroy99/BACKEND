import 'dotenv/config'
import express from "express";

const app = express();

// app.get('/', (req, res) => {
//     res.send({"Work": "Great"}) ;
// })

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A",
            des: 'Joke 1'
        },
        {
            id: 2,
            title: "B",
            des: 'Joke 2'
        },
        {
            id: 3,
            title: "C",
            des: 'Joke 3'
        },
    ]

    res.send(jokes);
});

const PORT = process.env.PORT || 3001
app.listen(PORT, (req, res) => {
    console.log(`Server is running at: ${PORT}`);
})