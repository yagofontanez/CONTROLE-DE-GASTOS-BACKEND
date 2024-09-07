const { Categoria } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.json(categorias);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar categorias" });
    }
  },

  async store(req, res) {
    try {
      const { nome } = req.body;
      const categoria = await Categoria.create({ nome });
      return res.status(201).json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar categoria" });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      return res.json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar categoria" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome } = req.body;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      categoria.nome = nome;
      await categoria.save();
      return res.json(categoria);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar categoria" });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const categoria = await Categoria.findByPk(id);
      if (!categoria) {
        return res.status(404).json({ error: "Categoria não encontrada" });
      }
      await categoria.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar categoria" });
    }
  },
};
