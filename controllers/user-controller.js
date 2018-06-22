const userService = require('../services/user-service');

module.exports.login = (req, res) => {
    const { username, password } = req.body;
    try {
        userService.authenticate(username, password);
        res.send({ username });
    }
    catch (e) {
        res.status(400).send({ message: e.message });
    }
};

module.exports.getAllUsers = (req, res) => {
    const users = userService.findAll();
    res.send(users);
};

module.exports.getUser = (req, res) => {
    const id = req.params.id;
    try {
        const user = userService.findById(id);
        res.send(user);
    }
    catch (e) {
        res.status(404).send({
            message: "User not found"
        });
    }
};

module.exports.addUser = (req, res) => {
    const { user } = req.body;
    try {
        res.send(userService.add(user));
    }
    catch (e) {
        res.status(500).send(e);
    }
};

module.exports.updateUser = (req, res) => {
    const { user } = req.body;
    try {
        res.send(userService.update(user));
    }
    catch (e) {
        res.status(500).send(e);
    }
};

module.exports.deleteUser = (req, res) => {
    const id = req.params.id;
    try {
        userService.remove(id);
        res.send({
            message: "User removed"
        });
    }
    catch (e) {
        res.status(500).send(err);
    }
};