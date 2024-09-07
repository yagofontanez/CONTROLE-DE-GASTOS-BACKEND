module.exports = (sequelize, DataTypes) => {
    const Conta = sequelize.define('Conta', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      saldo_inicial: {
        type: DataTypes.DECIMAL(10, 2),
        defaultValue: 0.00
      }
    }, {
      timestamps: true,
      tableName: 'contas'
    });
  
    Conta.associate = (models) => {
      Conta.hasMany(models.Transacao, { foreignKey: 'conta_id' });
    };
  
    return Conta;
  };
  