import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import pRouter from './router/product'
import imageRouter from './router/image'
import mongoose from 'mongoose'
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))


app.use(bodyParser.json())


app.use(express.static("src/public"))


app.use('/api', pRouter)
app.use('/upload', imageRouter)

// conect mongoose

app.get('/', (req, res) => {
    res.send("<div>Home</div>")
    res.end()
})


app.listen(3001, () => {
    console.log("go go go 3001");
})