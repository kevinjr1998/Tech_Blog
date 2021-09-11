
const router = require('express').Router();
const { Users, Posts, Comments } = require("../models");
const withAuth = require("../util/auth");

// "/" route handlers

router.get('/', withAuth, async function (req, res) {
    const postData = await Posts.findAll({
        include: [
            {
              model: Users,
              attributes: ['name'],
              attributes: {
                exclude: ['password'],
            }
            },
          ],
    });
    const blogPosts = postData.map((eachPost) => 
    eachPost.get({ plain: true })
    );
    debugger;
    res.render('home', { blogPosts,
        logged_in: req.session.logged_in });
});

router.get('/posts/:id', withAuth, async function (req, res) {
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
                attributes: {
                    exclude: ['password'],
                }
                
            }
          ],
    });

    const blogPosts = postData.map((eachPost) => 
    eachPost.get({ plain: true })
    );

    console.log(JSON.stringify(blogPosts));
    debugger;
    res.render('fullPosts', { blogPosts , 
        logged_in: req.session.logged_in, });


});



router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;