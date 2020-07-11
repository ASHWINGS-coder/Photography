const express = require('express'); // importing express
const router = express.Router();  // Router call
const passport = require('passport');
const usersController = require('../controllers/users_controller');

router.get('/sign-up',usersController.signup);
router.get('/sign-in',usersController.signin);

router.post('/create',usersController.create);
// use passport as a middleware to authenticate
router.post('/create-session',passport.authenticate(
    'local',{failureRedirect:'/users/sign-in'}
),usersController.createSession);



router.get('/add',(req,res) => {
    res.render("add")
})
//router.get('/',homeController.home);
router.post('/addtask',usersController.createtask);
router.post('/evaltask',usersController.createtask);

router.get('/evaluate',(req,res) => {
    res.render("eval")
})


module.exports = router ; // exporting router