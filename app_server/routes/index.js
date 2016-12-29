var express = require('express');
var router = express.Router();
var ctrlAtividades = require('../controllers/atividades');
var ctrlOthers = require('../controllers/others');

router.get('/', ctrlAtividades.atividades);
router.get('/sobre', ctrlOthers.about);

module.exports = router;