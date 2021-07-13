const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config('config.env');

const connectdb = async () => {
     const connection = await mongoose.connect('mongodb://db:27017', {
         useCreateIndex:true,
         useNewUrlParser: true,
         useFindAndModify: false,
         useUnifiedTopology:true,
         user: process.env.DBUSER,
         pass: process.env.DBPASSWD
     });

     console.log(`Connected to MongoDB database : ${connection.connection.host}`);

}

module.exports = connectdb;


