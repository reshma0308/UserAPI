const express = require('express');
const router  = express.Router();

const controllers = require("../controllers/userControllers");

// routes
router.post("/register",controllers.userpost);
router.get("/getAllUsers",controllers.getUsers);
router.get("/singleUser/:id",controllers.getSingleuser);
router.delete("/deleteUser/:id",controllers.deleteuser);
router.put("/updateUser/:id",controllers.updateUser)


module.exports = router;