
const express = require('express');
const router = express.Router();
const controller = require(`./controllers`)

router.route('/version').get(controller.getVersion)
router.route('/:name').get(controller.paramExample)
router.route('/').post(controller.postExample)

module.exports = router
