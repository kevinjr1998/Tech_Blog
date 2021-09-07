
const router = require('express').Router();
const { Users, Posts } = require("../models");

// "/" route handlers

router.get('/', async function (req, res) {
    const postData = await Posts.findAll({
        include: [
            {
              model: Users,
              attributes: ['name'],
            },
          ],
    });
    const blogPosts = postData.map((eachPost) => 
    eachPost.get({ plain: true })
    );
    debugger;
    res.render('home', { blogPosts });
});


module.exports = router;