module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      burger_name: DataTypes.STRING,
      devoured: DataTypes.BOOLEAN
    });
    return insertOne;
};

  