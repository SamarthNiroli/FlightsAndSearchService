const exppress = require('express');
const cityController = require('../../controllers/city-controller.js');

const router = exppress.Router();

router.post('/city', cityController.create);


module.exports = router;