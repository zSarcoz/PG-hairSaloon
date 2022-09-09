const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('barber', {
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
    phone: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    cedula: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    checkIn:{
        type: DataTypes.DATEONLY,
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    permissions:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },{
      timestamps:false,
    });
}