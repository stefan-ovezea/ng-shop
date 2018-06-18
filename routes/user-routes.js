const userRouter = require('express').Router();
const userService = require('../service/user-service');
const bodyParser = require('body-parser');
const cors = require('cors');

userRouter.use(bodyParser.json());
userRouter.use(cors());

userRouter.get('/', (req, res) => {
    const users = userService.findAll();
    res.send(users);
});

userRouter.post('/login', (req, res) => {
    const { username, password } = req.body;
    try {
        userService.authenticate(username, password);
        res.send({ username });
    } catch(e) {
        res.status(400).send({ message: e.message });
    }
});

userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    try {
        const user = userService.findById(id);
        res.send(user);
    } catch(e) {
        res.status(404).send({
             message: "User not found"
        });
    }
});

userRouter.post('/', (req, res) => {
    const { user } = req.body;
    try {
        res.send(userService.add(user));
    } catch(e) {
        res.status(500).send(e);
    }
});

userRouter.patch('/:id', (req, res) => {
    const { user } = req.body;
    try {
        res.send(userService.update(user));
    } catch(e) {
        res.status(500).send(e);
    }
});

userRouter.delete('/:id', (req, res) => {
    const id = req.params.id;
    try {
        userService.remove(id);
        res.send({
            message: "User removed"
        });
    } catch(e) {
        res.status(500).send(err);
    }
});

module.exports = userRouter;
