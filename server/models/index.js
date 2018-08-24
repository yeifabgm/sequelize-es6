'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


const models = Object.assign({}, ...fs.readdirSync(__dirname).filter(
  file => (file.indexOf(".") !== 0) && (file !== "index.js" ) && (file !== "baseModel.js" ))
  .map((file) => {
    const model = require(path.join(__dirname, file));
    return {
      [model.name]: model.init(sequelize)
    };
  }
));

Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(sequelize.models);
    }
  });

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;