const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { type: String, required:[true, "O nome de usuário é obrigatório"]},
    email: { type: String, required:[true, "O email é obrigatório"]},
    birth: { type: Date, required:[true, "O aniversário é obrigatório"]},
    senha: { type: String, required:[true, "A senha é obrigatória"]},
    image: { type: String, required: false }
});

const userModel = mongoose.model("users", userSchema);

module.exports = { userModel, userSchema };