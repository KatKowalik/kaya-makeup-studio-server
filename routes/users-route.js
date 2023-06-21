const router = require("express").Router();
const userController = require("../controllers/users-controller");

router
    .route('/')
    .post(userController.createUser)
    
router
    .route('/login')
    .post(userController.logUser)
    
router
    .route('/profile')
    .get(userController.authUser)
    
router
    .route('/:id')
    .get(userController.getUser)

module.exports = router;