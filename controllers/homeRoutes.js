
const router = require('express').Router();
const { Users, Posts, Comments } = require("../models");

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

router.get('/posts/:id', async function (req, res) {
    const postData = await Posts.findAll({
        where: {
            id: req.params.id,
        },
        include: [
            {
              model: Users,
              attributes: ['name'],
            },
            {
                model: Comments,
                include: [Users],
            }
          ],
    });

    const blogPosts = postData.map((eachPost) => 
    eachPost.get({ plain: true })
    );

    console.log(JSON.stringify(blogPosts));

    res.render('eachPost', { Post: blogPosts[0] });
});




module.exports = router;