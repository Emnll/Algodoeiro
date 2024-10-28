import mongoose from "mongoose";

const projetoSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId , required: [true, "o id do usuario é obrigátorio"]},
    descricao: { type: mongoose.Schema.Types.String } ,
    title: { type: mongoose.Schema.Types.String , required: [true, "o titulo eh obrigatorio"]},
    inicio: {type: mongoose.Schema.Types.Date },
    fim: {type: mongoose.Schema.Types.Date},
    materiais: [
        {
            material: {type: mongoose.Schema.Types.materialSchema},
            quantidade: {type: mongoose.Schema.Types.Number, required: true, min: 1}
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

export { projetoModel, projetoSchema };