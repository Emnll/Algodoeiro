import mongoose from "mongoose";

const materialSchema = new mongoose.Schema({
    nome: { type: mongoose.Schema.Types.String, required:[true, "O nome do material é obrigatório"]},
    foto: {type: mongoose.Schema.Types.String},
    marca: {type: mongoose.Schema.Types.String},
    tipo: {type: mongoose.Schema.Types.String},
    cor: {type: mongoose.Schema.Types.String},
    tex: {type: mongoose.Schema.Types.Number},
    gramatura: {type: mongoose.Schema.Types.Number},
    metragem: {type: mongoose.Schema.Types.Number},
    composicao: {type: mongoose.Schema.Types.String},
    
    

    
});

const materialModel = mongoose.model("material", materialSchema);

export { materialModel, materialSchema };