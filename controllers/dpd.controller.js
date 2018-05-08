const { Dpd } = require('../models')

module.exports = {
  getAllDpd: (req, res) => {
    Dpd.findAll().then(data=>{
      res.status(200).json({
        message: 'show all data Dpds',
        data
      })
    }).catch(error => res.send(error))
  },
  getDpdById: (req, res) => {
    Dpd.findById(req.params.id).then(data=>{
      res.status(200).json({
        message: 'Dpd data found',
        data
      })
    }).catch(error => res.send(error))
  },
  addNewDpd: (req, res) => {
    Dpd.create({
      name: req.body.name,
      address: req.body.address,
      dpd_id: req.body.dpd_id
    }).then(data=>{
      res.status(200).json({
        message: "new Dpd created",
        data
      })
    }).catch(error => res.send(error))
  },
  updateDpd: (req, res) => {
    Dpd.update({
      name: req.body.name,
      address: req.body.address,
      dpd_id: req.body.dpd_id
    },{
      where: {
        id: req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'Dpd data updated'
      })
    }).catch(error => res.send(error))
  },
  deleteDpd: (req, res) => {
    Dpd.destroy({
      where: {
        id:req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'Dpd deleted'
      })
    }).catch(error => res.send(error))
  }
}