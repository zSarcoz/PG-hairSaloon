const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('order', {
    id:{
      type:DataTypes.UUID,// Genero un id aleatorio con numeros y letras
      defaultValue: DataTypes.UUIDV4,// Identificador universal segun la norma V4
      allowNull:false,// Hago el campo obligatorio
      primaryKey: true
    },
    price:{
        type:DataTypes.FLOAT,
        allowNull:false,
    },
    date:{
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false
    }
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  });
}
