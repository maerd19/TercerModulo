const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// cookie-parser is used to store user credentials in a cookie
const cookieParser = require('cookie-parser');
const cors = require('cors');
const expressValidator = require('express-validator');
const path = require('path');
require('dotenv').config();

// import routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const answerRoutes = require('./routes/answer');
const surveyRoutes = require("./routes/survey");

// app 
const app = express();

// db tkm
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(() => console.log('DB Connected'));

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
// Cors will be able to hadle the request coming from different origins
app.use(cors({ origin: ["http://localhost:3000", "https://suggox.herokuapp.com/"] }));
app.use(express.static(path.join(__dirname, "public")));
// app.use(favicon(path.join(__dirname, "public", "favicon.ico")));

// routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', answerRoutes);
app.use("/api", surveyRoutes);

app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);    
});