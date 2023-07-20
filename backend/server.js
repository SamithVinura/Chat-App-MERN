const express = require('express')
const dotenv = require('dotenv')
const { chats } = require('./data/data')
const connectDB = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const chatRoutes = require('./routes/chatRoutes')
const { notFound, errorHandler } = require('./middlewares/errorMiddleware')

dotenv.config()
connectDB()
const app = express()

app.use(express.json())


app.get('/',(req,res)=>{
    res.send("API IS RUNNING")
})

app.use('/api/user',userRoutes)
app.use('/api/chat',chatRoutes)

app.use(notFound);
app.use(errorHandler);


const PORT = process.env.PORT || 5000

app.listen(PORT,console.log(`server running in port ${PORT}`))