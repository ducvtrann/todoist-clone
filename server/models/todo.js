'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Todo.belongsTo(models.Project, {
        foreignKey: {
          name: 'projectId',
          allowNull: true,
        },
      });
    }
  }
  Todo.init(
    {
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      complete: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Todo',
    }
  );
  return Todo;
};
