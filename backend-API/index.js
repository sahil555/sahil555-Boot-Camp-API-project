const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan')
const connectdb = require('./config/dbconnect')

const app = express();

// env
dotenv.config({ path : './config/config.env'})

// Router from express
const bootcamp = require('./routers/router');

// logger middleware 3rd party
app.use(morgan('combined'))


// DB-connection config
connectdb();

// router setup
app.use('/api/v1/' , bootcamp);


const PORT = process.env.PORT || 8000;

const server =  app.listen(
    PORT,
    console.log(`Server running in ${process.env.NODE_ENV} at ${process.env.HOST}:${PORT}`)
)

// handle promise rejections

process.on('unhandledRejection', (err,promise) => {
    console.log(`Error ${err.message}`);
    server.close(() => process.exit(1));
});