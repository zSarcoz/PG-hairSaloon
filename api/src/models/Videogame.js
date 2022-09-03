const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
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
    description:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    release_date:{
      type:DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
    },
    rating:{
      type:DataTypes.FLOAT
    },
    platforms:{
      type:DataTypes.ARRAY(DataTypes.STRING),
      allowNull:false
    },
    image: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    createdInDb:{
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true,
    }
  });
}
