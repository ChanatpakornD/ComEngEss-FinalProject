const express = require("express");
const { getUser,getAllUsers,createUser,updateUser,deleteUser } = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUser);
router.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
