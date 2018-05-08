const { Member } = require('../models')

module.exports = {
  getAllMember: (req, res) => {
    Member.findAll().then(data=>{
      res.status(200).json({
        message: 'show all data members',
        data
      })
    }).catch(error => res.send(error))
  },
  getMemberById: (req, res) => {
    Member.findById(req.params.id).then(data=>{
      res.status(200).json({
        message: 'member data found',
        data
      })
    }).catch(error => res.send(error))
  },
  addNewMember: (req, res) => {
    Member.create({
      name: req.body.name,
      gender: req.body.gender,
      pob: req.body.pob,
      dob: req.body.dob,
      address: req.body.address,
      job: req.body.job,
      dpc_id: req.body.dpc_id
    }).then(data=>{
      res.status(200).json({
        message: "new member created",
        data
      })
    }).catch(error => res.send(error))
  },
  updateMember: (req, res) => {
    Member.update({
      name: req.body.name,
      gender: req.body.gender,
      pob: req.body.pob,
      dob: req.body.dob,
      address: req.body.address,
      job: req.body.job,
      dpc_id: req.body.dpc_id
    },{
      where: {
        id: req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'member data updated'
      })
    }).catch(error => res.send(error))
  },
  deleteMember: (req, res) => {
    Member.destroy({
      where: {
        id:req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'member deleted'
      })
    }).catch(error => res.send(error))
  }
}