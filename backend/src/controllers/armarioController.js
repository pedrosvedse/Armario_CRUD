const model = require('../models/armarioModel');

module.exports = {
  listar: (req, res) => res.json(model.getAll()),

  buscar: (req, res) => {
    const item = model.getById(Number(req.params.id));
    return item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
  },

  criar: (req, res) => res.status(201).json(model.create(req.body)),

  atualizar: (req, res) => {
    const item = model.update(Number(req.params.id), req.body);
    return item ? res.json(item) : res.status(404).json({ erro: 'Não encontrado' });
  },

  excluir: (req, res) => {
    const ok = model.remove(Number(req.params.id));
    return ok ? res.status(204).send() : res.status(404).json({ erro: 'Não encontrado' });
  }
};