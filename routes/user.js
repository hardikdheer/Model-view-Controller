const express = require("express")

const { handleGetAllUsers, handleGetUserById, handleUpdateUserById, handleDeleteUser, handleCreateNewUser } = require("../controllers/user")
const router = express.Router();



router.route("/").get(handleGetAllUsers).post(handleCreateNewUser)

router.route("/:id")
    .get(handleGetUserById)
    .patch(handleUpdateUserById)
    .delete(handleDeleteUser);



module.exports = router;
