const express       = require('express');
const router        = express.Router();

const userController = require('./../controllers/users-controller');

router.post('/seed',userController.seedDB)
router.get('/', userController.index);
router.get('/:id', userController.getById);
router.post('/', userController.create);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);


module.exports = router;