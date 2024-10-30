const mongoose = require('mongoose');

const materialSchema = new mongoose.Schema({
    nome: { type:String, required:[true, "O nome do material é obrigatório"]},
    //foto: {type: String},
    //marca: {type: String},
    //cor: {type: String},
    //tex: {type: Number},
    //gramatura: {type: Number},
    //metragem: {type: Number},
    //composicao: {type: String},
        
});

const materialModel = mongoose.model("material", materialSchema);

module.exports = { materialModel, materialSchema };