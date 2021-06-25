const express = require('express');
const server = express();
// const cors = require('cors');
// const helmet = require('helmet');

// uncomment line 7
//const recipesRouter = require('./recipes/recipes-router');


// server.use(helmet());
// server.use(cors());
server.use(express.json());

// uncomment line 14
//server.use('/api/recipes', recipesRouter);

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
});


server.get("/", (req, res) => {
    res.status(200).json({ api: "status is UP" });
});

module.exports = server;