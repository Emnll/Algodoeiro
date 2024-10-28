const Projeto = require('../models/ProjetoModel');
exports.getAllProjetos = async (req, res) => {
    try{
        const userId = req.params.userId;
        const projetos = await Projeto.find({ userId });

        res.status(200).json({
            status: 'success',
            results: projetos.length,
            data: {
                projetos
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getProjeto = async (req, res) => {
    try{
        const projeto = await Projeto.find(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                projeto
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createProjeto = async (req, res) => {
    try{
        const newProjeto = await Projeto.create(req.body);

        res.status(201).json({
            status: 'success',
            data: {
                projeto: newProjeto
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateProjeto = async (req, res) => {
    try{
        const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                projeto,
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.deleteProjeto = async (req, res) => {
    try{
        const projeto = await Projeto.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};