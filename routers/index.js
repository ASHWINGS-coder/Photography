const express = require('express'); // importing express
const router = express.Router();  // Router call


router.use('/users',require('./users'));


module.exports = router ; // exporting router