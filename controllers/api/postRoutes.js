const router = require("express").Router();
const { Posts, Comments } = require("../../models");

// /api/posts/

router.post("/", async (req, res) => {
  try {
    const newPost = await Posts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/:id", async (req, res) => {
  try {
    const newComment = await Comments.create({
      content: req.body.content,
      user_id: req.session.user_id,
      post_id: req.params.id,
    });

    res.status(200).json(newComment);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const PostData = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!PostData) {
      res.status(404).json({ message: "No Post found with this id!" });
      return;
    }

    res.status(200).json(PostData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  debugger;
  console.log(req.body);
  try {
    const newPost = await Posts.update(
      {
        ...req.body,
        user_id: req.session.user_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    debugger;

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
