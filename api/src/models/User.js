const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('user', {
    id:{
      type:DataTypes.UUID,// Genero un id aleatorio con numeros y letras
      defaultValue: DataTypes.UUIDV4,// Identificador universal segun la norma V4
      allowNull:false,// Hago el campo obligatorio
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mobile_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    direction: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
  });
}
