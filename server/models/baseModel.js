'use strict';

const Sequelize = require("sequelize")

class BaseModel extends Sequelize.Model {
  static init(schema, options) {
    return super.init(schema, options)
  }
}

module.exports = BaseModel