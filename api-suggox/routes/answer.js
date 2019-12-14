const express = require("express");
const router = express.Router();

const {
    create,
    answerById,
    read,
    update,
    remove,
    list
} = require("../controllers/answer");
const { requireSignin, isAuth } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/answer/create/:userId", requireSignin, isAuth, create);
router.get("/answer/:answerId", read);
router.put("/answer/:answerId/:userId", requireSignin, isAuth, update );
router.delete("/answer/:answerId/:userId", requireSignin, isAuth, remove );
router.get("/answers", list);

router.param("answerId", answerById);
// Anytime we find a parameter called userId in the route userById will run and make the user info available in the request object
router.param("userId", userById);

module.exports = router;