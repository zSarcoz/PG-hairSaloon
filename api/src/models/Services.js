const { DataTypes, STRING, FLOAT } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define(
    "services",
    {
      // id:{
      //     type:DataTypes.INTEGER,// Genero un id aleatorio con numeros y letras
      //     // defaultValue: DataTypes.UUIDV4,// Identificador universal segun la norma V4
      //     allowNull: false,// Hago el campo obligatorio
      //     primaryKey: true
      //   },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subtipos: {
        type: DataTypes.ARRAY(STRING),
        allowNull: false,
      },
      prices: {
        type: DataTypes.ARRAY(FLOAT),
        allowNull: false,
      },
      sexo: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    { timestamps: false}
  );
};
