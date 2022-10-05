const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("character", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false, 
      defaultValue: DataTypes.UUIDV4
    },
    name :{
      type: DataTypes.STRING,
      allowNull: false,
    },
    species: {
      type: DataTypes.STRING
    }, 
    origin : {
      type:DataTypes.STRING,
    }, 
    image :{
      type: DataTypes.STRING,
    },
    created: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    }
  }, {
    timestamps: false
  });
};