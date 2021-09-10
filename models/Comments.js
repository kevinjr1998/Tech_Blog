const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Comments extends Model {}

Comments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    content: { 
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    }, 
    post_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Posts',
        key: 'id',
      },
    user_id: {
      type: DataTypes.STRING,
      references: {
        model: 'Users',
        key: 'id',
      }
    },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Comments',
  }
);

module.exports = Comments;