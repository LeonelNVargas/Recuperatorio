module.exports = (sequelize, DataTypes) => {

    let cols = {
       id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
       },
       nombre: {
        type: DataTypes.STRING(45)
       }
    };

    let config = {
       tableName: "categorias",
    };

    const Categoria = sequelize.define("Categoria", cols, config);

    Categoria.associate= function(models){

        Categoria.hasMany(models.Producto, {
            foreignKey: 'categoria_id',
            as: 'productos'
        }) 

    }
    return Categoria;

}