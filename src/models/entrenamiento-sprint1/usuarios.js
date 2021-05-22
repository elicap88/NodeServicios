//Modelo de la tabla usuarios
module.exports = function(sequelize,DataTypes,env){
  const Usuarios = sequelize.define("usuarios",{
  idUsu :{
    field: "id_usu",
    type : DataTypes.INTEGER,
    primaryKey : true,
    autoincrement : true
  },
  nomUsu :{
    field :"nom_usu",
    type : DataTypes.STRING(50),
    allowNull : false,
    validate :{
      notEmpty : true
    }
  },
  apeUsu :{
    field :"ape_usu",
    type : DataTypes.STRING(50),
    allowNull : false,
    validate :{
      notEmpty : true
    }
  },
  logUsu :{
    field :"log_usu",
    type : DataTypes.STRING(40),
    allowNull : false,
    validate :{
      notEmpty : true
    }
  },
  pasUsu :{
    field :"pas_usu",
    type : DataTypes.STRING(40),
    allowNull : false,
    validate :{
      notEmpty : true
    }
  },
  nivAdm :{
    field :"niv_admn",
    type : DataTypes.BOOLEAN,
    set: function(value) {
    if (value === 'true') value = true;
    if (value === 'false') value = false;
    this.setDataValue('nivAdm', value);
  }
  }
  },{
  schema :"general"
  });
  return Usuarios;
};
