var express = require('express');
var router = express.Router();
const {
  getAllDpd, 
  getDpdById,
  addNewDpd, 
  updateDpd, 
  deleteDpd,
} = require('../controllers/dpd.controller')
/* GET users listing. */
router.get('/', getAllDpd);
router.get('/:id', getDpdById);
router.post('/', addNewDpd);
router.put('/:id', updateDpd);
router.delete('/:id', deleteDpd);

module.exports = router;
