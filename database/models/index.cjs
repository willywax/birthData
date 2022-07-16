// import fs from 'fs';
// import path from 'path';
// import Sequelize from 'sequelize';
// import { fileURLToPath } from 'url'
// import configFile from '../config.cjs';


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const model_name = 
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const configFile = require('../config.cjs');

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = configFile[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-4) === '.cjs');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
// export default db;
