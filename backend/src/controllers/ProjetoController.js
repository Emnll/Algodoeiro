const Projeto = require("../models/ProjetoModel");
const catchAsync = require("../utils/catchAsync");

exports.getAllProjetos = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;
  const projetos = await Projeto.find({ userId });

  if (!projetos) {
    next(new AppError("Não encontramos projetos com esse nome :(", 404));
  }
  res.status(200).json({
    status: "success",
    results: projetos.length,
    data: {
      projetos,
    },
  });
});
exports.getProjeto = catchAsync(async (req, res, next) => {
  const projeto = await Projeto.find(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      projeto,
    },
  });
});
exports.createProjeto = catchAsync(async (req, res, next) => {
  const newProjeto = await Projeto.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      projeto: newProjeto,
    },
  });
});
exports.updateProjeto = catchAsync(async (req, res, next) => {
  const projeto = await Projeto.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      projeto,
    },
  });
});
exports.deleteProjeto = catchAsync(async (req, res, next) => {
  const projeto = await Projeto.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
