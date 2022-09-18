'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Layanan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Layanan.init({
    nama: DataTypes.STRING,
    unit: DataTypes.ENUM('kg', 'pcs', 'cm', 'm2'),
    harga: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Layanan',
  });
  return Layanan;
};