const express=require('express');
const path=require('path');
const mongoose=require('mongoose');
const cors=require('cors');
const bodyParser=require('body-parser')
dataBaseConfig=require('./database/db')


//mongodb
mongoose.Promise=global.Promise;
mongoose.connect(dataBaseConfig.db,{
    useUnifiedTopology:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(()=>{
    console.log('Database connected successfully')
},
error=>{
    console.log('Could not connected')
})

//set up express js port
const currencyRoute=require('./routes/currency.route')
const app=express()
app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());
app.use(cors());

//RESTFUL API
app.use('/api',currencyRoute)


app.listen(3000,()=>{
    console.log('Server started at port 3000')
})