const express = require("express");
const router = express.Router();

const {
    create,
    surveyById,
    read,
    remove,
    update,
    list,
    listBySearch,
    photo
} = require("../controllers/survey");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/survey/create/:userId", requireSignin, isAuth, isAdmin, create);
router.get("/survey/:surveyId", read);
router.put("/survey/:surveyId/:userId", requireSignin, isAuth, isAdmin, update);
router.delete("/survey/:surveyId/:userId", requireSignin, isAuth, isAdmin, remove);

// List of all the surveys
router.get("/surveys", list);
// list surveys by search
router.post("/surveys/by/search", listBySearch);
// Send photo to frontend
router.get("/survey/photo/:surveyId", photo);

// anytime we find a parameter called userId in the route userById will run and make the user info available in the request object
router.param("userId", userById);
// anytime we find a parameter called surveyId in the route surveyById will run and make the survey info available in the request object
router.param("surveyId", surveyById);

module.exports = router;