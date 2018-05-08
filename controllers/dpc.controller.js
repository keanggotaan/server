const { Dpc } = require('../models')

module.exports = {
  getAllDpc: (req, res) => {
    Dpc.findAll().then(data=>{
      res.status(200).json({
        message: 'show all data Dpcs',
        data
      })
    }).catch(error => res.send(error))
  },
  getDpcById: (req, res) => {
    Dpc.findById(req.params.id).then(data=>{
      res.status(200).json({
        message: 'Dpc data found',
        data
      })
    }).catch(error => res.send(error))
  },
  addNewDpc: (req, res) => {
    Dpc.create({
      name: req.body.name,
      address: req.body.address,
      dpd_id: req.body.dpd_id
    }).then(data=>{
      res.status(200).json({
        message: "new Dpc created",
        data
      })
    }).catch(error => res.send(error))
  },
  updateDpc: (req, res) => {
    Dpc.update({
      name: req.body.name,
      address: req.body.address,
      dpd_id: req.body.dpd_id
    },{
      where: {
        id: req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'Dpc data updated'
      })
    }).catch(error => res.send(error))
  },
  deleteDpc: (req, res) => {
    Dpc.destroy({
      where: {
        id:req.params.id
      }
    }).then(data=>{
      res.status(200).json({
        message: 'Dpc deleted'
      })
    }).catch(error => res.send(error))
  }
}