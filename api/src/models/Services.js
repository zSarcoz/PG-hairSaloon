const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

module.exports = (sequelize) => {
  sequelize.define("services", {
    // id:{
    //     type:DataTypes.UUID,// Genero un id aleatorio con numeros y letras
    //     defaultValue: DataTypes.UUIDV4,// Identificador universal segun la norma V4
    //     allowNull:false,// Hago el campo obligatorio
    //     primaryKey: true
    //   },

    name: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    description:{
        type: DataTypes.STRING,
        allowNull: false,
    },


  },{timestamps: true,
    createdAt: 'creado',
    updatedAt: false
});
};
