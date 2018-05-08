var express = require('express');
var router = express.Router();
const {
  getAllMember, 
  getMemberById,
  addNewMember, 
  updateMember, 
  deleteMember,
} = require('../controllers/user.controller')
/* GET users listing. */
router.get('/', getAllMember);
router.get('/:id', getMemberById);
router.post('/', addNewMember);
router.put('/:id', updateMember);
router.delete('/:id', deleteMember);

module.exports = router;
