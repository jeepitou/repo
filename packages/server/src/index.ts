import express from "express";

export const startServer = () => {
    const app = express()


    app.get('/', (req, res) => {
        res.send('Hello World')
    });

    const port = process.env.PORT

    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
    })

}

startServer()

