'use strict';
/*
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  Todo.associate = function(models) {
    Todo.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  };
  return Todo;
};
*/

const Sequelize = require('sequelize')
const BaseModel = require('./baseModel')

class Todo extends BaseModel {
  static get schema() {
    return {
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      }
    }
  }

  static init(sequelize) {
    return super.init(this.schema, { 
      tableName: "Todos",
      sequelize,
      hooks: this.hooks
    })
  }

  static get hooks() {
    return {
      beforeCreate: this.beforeCreate
    }
  }

  static async beforeCreate(user) {
    console.log("qwerqerewrqewrqew")
  }

  static associate(models) {
    this.hasMany(models.TodoItem, {
      foreignKey: 'todoId',
      as: 'todoItems',
    });
  }
}

module.exports = Todo