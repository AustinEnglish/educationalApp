const express       = require('express');
const router        = express.Router();

const userController = require('./../controllers/users-controller');
const {isAuthenticated} = require('./../passport/users-auth')

router.post('/seed',userController.seedDB)

router.post('/login', isAuthenticated, userController.login);

// router.get('/', userController.index);
// router.get('/:id', userController.getById);
// router.post('/', userController.create);
router.put('/:id', userController.update);
// router.delete('/:id', userController.destroy);


module.exports = router;