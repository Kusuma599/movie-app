const express = require('express');

const apiRoutes = require('./server/apiRoutes');

const app = express();
app.use(express.json());

app.use('/api', apiRoutes());

app.listen(3000, () => {
    console.log('Server is up and and running in port 3000');
});

/*const { Sequelize } = require('sequelize');
const moment = require('moment');
const express = require('express');

const { Movie } = require('./model');
/*
const connectToDatabase = async () => {

    const sequelize = new Sequelize('postgres', 'postgres', 'Kusuma@123', {
        host: 'localhost',
        dialect: 'postgres'
    });
    try{
        await sequelize.authenticate();
        console.log('Connection has been established.');
    }

        
       catch (error) {
        console.error('Unable to connect to the database:', error);
                    }
}
 connectToDatabase();
 

 const CreateNewMovie = async () => {
     const movieId = `MK-${moment().unix()}`;
     console.log(movieId);

     const movieRecord = {
         movieId,
         title: 'Titanic',
         year: 1995,
         length: '120min',
         actors:'Chris'
     }
    
     const result = await Movie.create(movieRecord);

    console.log(result.toJSON());
 }
 CreateNewMovie();
 */