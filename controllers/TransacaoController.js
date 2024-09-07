const { Transacao } = require("../models");

module.exports = {
  async index(req, res) {
    try {
      const transacoes = await Transacao.findAll();
      return res.json(transacoes);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao listar transações" });
    }
  },

  async store(req, res) {
    try {
      const { descricao, valor, tipo, data_transacao, conta_id, categoria_id } =
        req.body;
      const transacao = await Transacao.create({
        descricao,
        valor,
        tipo,
        data_transacao,
        conta_id,
        categoria_id,
      });
      return res.status(201).json(transacao);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao criar transação" });
    }
  },

  async show(req, res) {
    try {
      const { id } = req.params;
      const transacao = await Transacao.findByPk(id);
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }
      return res.json(transacao);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao buscar transação" });
    }
  },

  async update(req, res) {
    try {
      const { id } = req.params;
      const { descricao, valor, tipo, data_transacao, conta_id, categoria_id } =
        req.body;
      const transacao = await Transacao.findByPk(id);
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }
      transacao.descricao = descricao;
      transacao.valor = valor;
      transacao.tipo = tipo;
      transacao.data_transacao = data_transacao;
      transacao.conta_id = conta_id;
      transacao.categoria_id = categoria_id;
      await transacao.save();
      return res.json(transacao);
    } catch (error) {
      return res.status(500).json({ error: "Erro ao atualizar transação" });
    }
  },

  async destroy(req, res) {
    try {
      const { id } = req.params;
      const transacao = await Transacao.findByPk(id);
      if (!transacao) {
        return res.status(404).json({ error: "Transação não encontrada" });
      }
      await transacao.destroy();
      return res.status(204).send();
    } catch (error) {
      return res.status(500).json({ error: "Erro ao deletar transação" });
    }
  },
};
