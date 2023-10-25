const express = require("express")
const mongoose = require("mongoose")
const app = express()
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload")
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT


const cors = require('cors');
const corsOpts = {
    // origin: 'http://localhost:3000',
    origin: [process.env.LOCALPORT],
    credentials: true,
    methods: ['GET', 'POST', 'HEAD', 'PUT', 'PATCH', 'DELETE'],
    allowedHeaders: ['Content-Type'],
    exposedHeaders: ['Content-Type']
};
app.use(cors(corsOpts));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }))

app.use(fileupload({
    useTempFiles: true,
    tempFileDir: "/tmp/"
}))


const task = require('./routes/taskRoutes')


app.use('/api/v1', task)



const DB = process.env.DATABASE
// console.log(DB)

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(() => {
    console.log("connected")

}).catch((err) => {
    console.log(err)

})







app.listen(port, () => {
    console.log(`started on ${port}`)
})
