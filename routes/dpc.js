var express = require('express');
var router = express.Router();
const {
  getAllDpc, 
  getDpcById,
  addNewDpc, 
  updateDpc, 
  deleteDpc,
} = require('../controllers/dpc.controller')
/* GET users listing. */
router.get('/', getAllDpc);
router.get('/:id', getDpcById);
router.post('/', addNewDpc);
router.put('/:id', updateDpc);
router.delete('/:id', deleteDpc);

module.exports = router;
