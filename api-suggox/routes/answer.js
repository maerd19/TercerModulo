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
const { requireSignin, isAuth/*, isAdmin*/ } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.get("/answer/:answerId", read);

router.post("/answer/create/:userId", requireSignin, isAuth, /*isAdmin,*/ create);
router.put("/answer/:answerId/:userId", requireSignin, isAuth, /*isAdmin,*/ update );
router.delete("/answer/:answerId/:userId", requireSignin, isAuth, /*isAdmin,*/ remove );
router.get("/categories", list);

router.param("answerId", answerById);
// Anytime we find a parameter called userId in the route userById will run and make the user info available in the request object
router.param("userId", userById);

module.exports = router;