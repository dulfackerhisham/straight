const mongoose = require('mongoose');

const connectDatabase = ()=>{
    //connection string
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(con=>{
        console.log(`MongoDB is connected to the host: ${con.connection.host}`);    
    }).catch((err)=>{
        console.log(err);
    })
};

module.exports = connectDatabase;