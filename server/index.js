const express = require('express');
// const mongoose = require('mongoose');
const PORT = process.env.PORT || 3002;
const cors = require('cors');
const app = express();
const userRouter= require('../routes/userRoutes.js');
const mainRouter =require('../routes/mainRouter.js')

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/your_database_name', { useNewUrlParser: true });

mongoose.connection
    .once("open", () => console.log("Connected"))
    .on("error", error => {
        console.log('Error', error);
    });

    // Use the router as middleware
app.use('/user', userRouter);
app.use('/main',mainRouter);

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

