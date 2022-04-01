const router = require("express").Router();

const {registerUser} = require("../controllers/userController");

//Register user ---> /api/v1/user/register
router.post('/register', registerUser);


module.exports = router;