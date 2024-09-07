module.exports = (sequelize, DataTypes) => {
    const Transacao = sequelize.define('Transacao', {
      descricao: DataTypes.STRING,
      valor: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      tipo: {
        type: DataTypes.ENUM('entrada', 'saida'),
        allowNull: false
      },
      data_transacao: {
        type: DataTypes.DATEONLY,
        allowNull: false
      }
    }, {
      timestamps: true,
      tableName: 'transacoes'
    });
  
    Transacao.associate = (models) => {
      Transacao.belongsTo(models.Categoria, { foreignKey: 'categoria_id' });
      Transacao.belongsTo(models.Conta, { foreignKey: 'conta_id' });
    };
  
    return Transacao;
  };
  