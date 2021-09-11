const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const withAuth = require('../util/auth');

// /dashboard

router.get('/', withAuth, async function(req , res) {
    const findUser = await Users.findOne({
        where: {
            id: req.session.user_id,
        }
    });
    
    const currentUser = await findUser.get({ plain: true });

    const postData = await Posts.findAll({
        order: [['date_created', 'DESC'], 
    ],
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
    res.render('dashboardPosts', { blogPosts, 
        logged_in: req.session.logged_in, currentUser});

});

router.get('/:id', withAuth, async function (req, res) {
    const postData = await Posts.findByPk(req.params.id);

    const postGetter = await postData.get({ plain: true });

    console.log(JSON.stringify(postGetter));
   
    res.render('dashboardUpDel', { postGetter, 
        logged_in: req.session.logged_in, });

});

module.exports = router;