import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'
import mangaRoute from './route/manga.route.js'
import userRoute from './route/user.route.js'
const app = express()

app.use(cors())
app.use(express.json())
dotenv.config();

const PORT =process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI,{
     useNewUrlParser:true,
     useUnifiedTopology:true
    });

    console.log('connected to mongodb')
} catch (error) {
    console.log('error: ',error)
}
// definig routes
  app.use('/manga',mangaRoute)
  app.use('/user',userRoute)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})