import express from 'express'
const app = express()
const port = process.env.PORT || 'mayank-ap12.herokuapp.com'
import {join} from 'path'
import about from './routes/home.js'
import {connectDB}  from './db/connect.js'

app.use(express.urlencoded({extended:false}))
app.use('/static',express.static(join(process.cwd(),'public')))
app.use('/',about)
const DATABASE_URL = process.env.DATABASE_URL||"mongodb://localhost:27017"
app.set('view engine','ejs')

//connect database 
//connect database 
connectDB(DATABASE_URL)


app.listen(port,(req,res)=>{
    console.log(`server run on http://localhost:${port}`)
})
