import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';
import postRoutes from './routes/post.js'

const app = express()

app.use('/posts', postRoutes)

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())


// for database

const connectionUrl = "mongodb+srv://Aaquib5076:Aaquib5076@cluster0.4fa9k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(connectionUrl, {useUnifiedTopology : true, useNewUrlParser : true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`)))
    .catch(err => console.log(err))

mongoose.set('useFindAndModify', false)