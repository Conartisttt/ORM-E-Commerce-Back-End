// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model { }

// set up fields and rules for Category model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Link to database connection
    sequelize: sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    // Set true so that modelName is not pluralized automatically
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
