const sequelize = require('../config/connection');
const { Users, Posts, Comments } = require('../models');

const userData = require('./userseeds.json');
const postData = require('./postseeds.json');
const commentData = require("./commentseeds.json")

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Users.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const post of postData) {
    await Posts.create({
      ...post,
    });
  }

  for (const comment of commentData) {
    await Comments.create({
      ...comment,
    });
  }

  process.exit(0);
};

seedDatabase();
