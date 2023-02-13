const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index')


const PORT = process.env.PORT || 4000;
const app = express();
mongoose.set('strictQuery', true);


app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, ()=> console.log(`server start at port ${PORT}`))
    } catch (e) {
        console.log(e);
    }
}
start()