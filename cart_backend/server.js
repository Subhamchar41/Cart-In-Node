const express = require('express');
const env = require('dotenv');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')

//routes
//const authRoutes = require('./controllers/auth');
require('./model/cart')



//environment variable or you can say constants
env.config();
mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.1qtvy.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`, 
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        useCreateIndex: true
    }
)

mongoose.connection.on('connected'  ,  () => {
    console.log('Database connected');
})

mongoose.connection.on('error'  ,  (err) => {
    console.log('Error connected' , err);
})

app.use(cors())
app.use(express.json())
app.use(require('./routes/addToCart.js'))



//app.use('/api', authRoutes);


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});