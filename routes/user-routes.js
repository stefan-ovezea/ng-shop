const userRouter = require('express').Router();
const bodyParser = require('body-parser');
const { login, getAllUsers, getUser, addUser, deleteUser, updateUser } = require('../controllers/user-controller');
const cors = require('cors');

userRouter.use(bodyParser.json());
userRouter.use(cors());

userRouter.post('/login', login);

userRouter.route('/')
    .get(getAllUsers)
    .post(addUser);
    
userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);

module.exports = userRouter;
