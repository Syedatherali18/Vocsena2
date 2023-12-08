const express = require('express');
const mongoose = require('mongoose');
const createServiceRouter = require('./Router/Create-Service');
const signUpRouter = require('./Router/Sign-up');
const app = express();

const port = 8000;
const url = 'mongodb+srv://social:Hellothere786@cluster.lknculb.mongodb.net/?retryWrites=true&w=majority';
app.use(express.json());

mongoose.connect(url)
    .then(() => {
        console.log('Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use('/', createServiceRouter);

app.use('/', signUpRouter);

//203.101.177.234/32
//37.111.177.135/32

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});