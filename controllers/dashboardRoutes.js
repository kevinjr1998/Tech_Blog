const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const withAuth = require('../util/auth');

// /dashboard

router.get('/', withAuth, async function(req , res) {
    debugger;
    const postData = await Posts.findAll({
        where: {
             user_id: req.session.user_id,
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
    res.render('fullPosts', { blogPosts, 
        logged_in: req.session.logged_in, });

});

module.exports = router;