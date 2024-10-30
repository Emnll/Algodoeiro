const {materialModel: Material} = require('../models/MaterialModel');
exports.getAllMateriais = async (req, res) => {
    try{
        const materiais = await Material.find();

        res.status(200).json({
            status: 'success',
            results: projetos.length,
            data: {
                materiais
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.getMaterial = async (req, res) => {
    try{
        const material = await Material.find(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                material
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.createMaterial = async (req, res) => {
    try{
        console.log(req.body)
        const newMaterial = await Material.create(req.body);
        console.log(newMaterial)

        res.status(201).json({
            status: 'success',
            data: {
                projeto: newMaterial
            }
        });
    } catch(err){
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};
exports.updateMaterial = async (req, res) => {
    try{
        const material = await Material.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                material,
            }
        });
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
exports.deleteMaterial = async (req, res) => {
    try{
        const material = await Material.findByIdAndDelete(req.params.id);

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