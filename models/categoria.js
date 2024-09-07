module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      timestamps: true,
      tableName: 'categorias'
    });
  
    Categoria.associate = (models) => {
      Categoria.hasMany(models.Transacao, { foreignKey: 'categoria_id' });
    };
  
    return Categoria;
  };
  