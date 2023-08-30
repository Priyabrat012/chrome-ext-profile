const express = require('express')
const cors = require('cors')
const multer = require('multer')

const app = express()

// middleware

// var corsOption ={
//     origin: "https://localhost:8081"
// }

app.use(express.json())
app.use(cors())

app.use(express.urlencoded({ extended: true }))


//testing


//new
// const router = require('./routes/productRouter.js')
const router = require('./routes/profileRouter')
// app.use('/api/products', router)
app.use('/api/profile', router)



//new



app.get('/', async (req,res) => {
    res.json({message:'hello from api'})
})



//port

const PORT = process.env.PORT || 8080

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})