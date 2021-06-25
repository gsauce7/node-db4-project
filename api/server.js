const express = require('express');
const server = express();
// const cors = require('cors');
// const helmet = require('helmet');

const recipesRouter = require('./recipes/recipes-router');


// server.use(helmet());
// server.use(cors());
server.use(express.json());

server.use('/api/recipes', recipesRouter);

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