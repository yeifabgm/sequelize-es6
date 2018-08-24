'use strict';
/*
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  };
  return TodoItem;
};
*/

const Sequelize = require("sequelize")
const BaseModel = require('./baseModel')

class TodoItem extends BaseModel {
  static get schema() {
    return {
      content: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      complete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      }
    }
  }

  static init(sequelize) {
    return super.init(this.schema, {
      tableName: "TodoItems",
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Todo, {
      foreignKey: 'todoId',
      onDelete: 'CASCADE',
    });
  }
}

module.exports = TodoItem