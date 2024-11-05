const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required:[true, "O nome de usuário é obrigatório"],
        trim: true,
        maxlength: [50, 'O nome deve ter no máximo 50 caracteres']
    },
    email: { 
        type: String,
        required:[true, "O email é obrigatório"]
    },
    nascimento: { 
        type: Date, 
        required:[true, "O aniversário é obrigatório"]
    },
    senha: { 
        type: String, 
        required:[true, "A senha é obrigatória"]
    },
    image: { 
        type: String,
        required: false }
});

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;