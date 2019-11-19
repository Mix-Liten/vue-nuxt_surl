const express = require('express')
const router = express.Router()
const shortenRoute = require('./url')
const redirectRoute = require('./redirect')

router.use('', shortenRoute)
router.use('/url', redirectRoute)

module.exports = router
