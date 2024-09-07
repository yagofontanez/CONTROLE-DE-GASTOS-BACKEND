const { Conta } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const contas = await Conta.findAll();
      return res.json(contas);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar contas" });
    }
  },

  async store(req, res) {
    try {
      const { nome, saldo_inicial } = req.body;
      const conta = await Conta.create({ nome, saldo_inicial });
      return res.status(201).json(conta);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar conta" });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: "Conta não encontrada" });
      }
      return res.json(conta);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar conta" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, saldo_inicial } = req.body;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: "Conta não encontrada" });
      }
      conta.nome = nome;
      conta.saldo_inicial = saldo_inicial;
      await conta.save();
      return res.json(conta);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar conta" });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const conta = await Conta.findByPk(id);
      if (!conta) {
        return res.status(404).json({ error: "Conta não encontrada" });
      }
      await conta.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar conta" });
    }
  },
};
