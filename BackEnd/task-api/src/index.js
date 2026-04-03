import express from "express"
import cors from 'cors'
import router from "./routes/task.router.js"
import 'dotenv/config'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',router)

app.listen(process.env.PORT || 8080, () => console.log(`http://localhost:${process.env.PORT || 8080}`))
