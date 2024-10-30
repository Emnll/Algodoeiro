const mongoose = require('mongoose');
const {materialSchema} = require('./MaterialModel');

const projetoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId , required: [true, "o id do usuario é obrigátorio"]},
    descricao: { type: String } ,
    title: { type: String , required: [true, "o titulo eh obrigatorio"]},
    inicio: {type: Date },
    fim: {type: Date},
    materiais: [
        {
            material: materialSchema,
            quantidade: {type: Number, required: true, min: 1}
        }
    ]
});

projetoSchema.virtual('inicioFormatado').get(function() {
    return dayjs(this.inicio).format('DD/MM/YYYY');
});

projetoSchema.virtual('fimFormatado').get(function() {
    return dayjs(this.fim).format('DD/MM/YYYY');
});
projetoSchema.set('toJSON', { virtuals: true });
  


const projetoModel = mongoose.model("projeto", projetoSchema);

module.exports = projetoModel;