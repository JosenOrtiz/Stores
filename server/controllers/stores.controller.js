const Store = require('../models/stores.model')


module.exports.allStores = (req, res) => {
    Store.find()
        .then(response => res.json(response))
        .catch(err=>res.json(response))
}

module.exports.oneStore = (req, res) => {
    Store.findOne({_id: req.params.id})
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}

module.exports.addStore = (req, res) => {
    Store.create(req.body)
        .then(response => res.json(response))
        .catch(err=>res.status(400).json(err))
}

module.exports.updateStore = (req, res) => {
    Store.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new:true, runValidators: true }
    )
        .then(response => res.json(response))
        .catch(err=>res.status(400).json(err))    
}

module.exports.deleteStore = (req, res) => {
    Store.deleteOne({_id:req.params.id})
        .then(response => res.json(response))
        .catch(err=>res.json(err))
}