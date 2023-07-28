const express = require('express');

const router = express.Router();

const tweetsRouter = require('./tweets.router');

router.use(tweetsRouter);

module.exports = router;