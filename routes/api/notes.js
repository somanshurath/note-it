const express = require('express');
const router = express.Router();

// @route   GET api/notes
// @desc    Test route
// @access  Public
router.get('/', (req, res) => res.send("Notes route"));

module.exports = router;