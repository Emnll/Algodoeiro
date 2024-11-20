const { materialModel: Material } = require("../models/MaterialModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.getAllMateriais = catchAsync(async (req, res, next) => {
  const materiais = await Material.find();

  if (!materiais) {
    next(new AppError("Não encontramos materiais com esse nome :(", 404));
  }

  res.status(200).json({
    status: "success",
    results: materiais.length,
    data: {
      materiais,
    },
  });
});
exports.getMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.find(req.params.id);

  if (!material) {
    next(new AppError("Não encontramos materiais com esse nome :(", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      material,
    },
  });
});
exports.createMaterial = catchAsync(async (req, res, next) => {
  console.log(req.body);
  const newMaterial = await Material.create(req.body);
  console.log(newMaterial);

  res.status(201).json({
    status: "success",
    data: {
      projeto: newMaterial,
    },
  });
});
exports.updateMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      material,
    },
  });
});
exports.deleteMaterial = catchAsync(async (req, res, next) => {
  const material = await Material.findByIdAndDelete(req.params.id);

  res.status(204).json({
    status: "success",
    data: null,
  });
});
