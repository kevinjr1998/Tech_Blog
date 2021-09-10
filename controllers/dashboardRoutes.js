const router = require('express').Router();
const { Users, Posts, Comments } = require('../models');
const { findAll } = require('../models/Users');
const withAuth = require('../util/auth');

// /dashboard

router.get('/', withAuth, async function(req,res) {

    const postData = Posts.findAll({
        where: {
            user_id: res.session.user_id,
        },
        include: {
            model: Comments,
        }
    })

});