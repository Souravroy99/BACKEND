import express from "express"
const app = express()

const PORT = 5000

app.get("/home/:ID1/:ID2/bc/:ID3", (req, res) => {
    // const id1 = req.params.ID
    // const id2 = req.params.ID2
    // const id3 = req.params.ID3

    const {ID1, ID2, ID3} = req.params

    const info = {
        id1: ID1,
        id2: ID2, 
        id3: ID3, 
    }
    res.send(info);
})

app.listen(PORT, () => {
    console.log(`Server is listening at port: ${PORT}`) ;
})