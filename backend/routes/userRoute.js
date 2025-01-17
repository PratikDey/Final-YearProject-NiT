const { loginUser, logoutUser, registerUser, deleteUser , updatePassword 
    , getEmployeePassword , updateEmployeeInformation,
updateRoleHr,getAllUsers , getSingleuser
 } = require('../controllers/userController');
const { isAuthenticated, isAdmin , isHr} = require('../middleware/auth');

const router = require('express').Router();

router.post('/login', loginUser);



router.post('/register', registerUser);

// authenticated routes

router.post('/logout',isAuthenticated, logoutUser);

router.route('/password').put(isAuthenticated, updatePassword);

// Hr things
router.route('/:id').get(isAuthenticated, isHr, getSingleuser).put( isAuthenticated, isHr , updateRoleHr);

router.get('/', isAuthenticated, isHr , getAllUsers);



//manage employees
router.route('/admin/:id').get(isAuthenticated, isAdmin, getEmployeePassword)
                        .put(isAuthenticated , isAdmin, updateEmployeeInformation)
                        .delete(isAuthenticated , isAdmin , deleteUser);


router.get('/password/:id', isAuthenticated , isAdmin , getEmployeePassword);



module.exports = router;