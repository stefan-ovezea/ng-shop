const userRouter = require('express').Router();
const userService = require('../service/user-service');
const bodyParser = require('body-parser');

userRouter.use(bodyParser.json());

userRouter.get('/', (req, res) => {
    const users = userService.findAll();
    res.send(users);
});

userRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = userService.findById(id);
    user ? res.send(user)
         : res.status(404).send({
             message: "User not found"
         });
});

userRouter.post('/', (req, res) => {
    const user = req.body;
    try {
        res.send(userService.add(req.body));
    } catch(e) {
        res.status(500).send(e);
    }
});

userRouter.patch('/:id', (req, res) => {
    const user = req.body;
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
