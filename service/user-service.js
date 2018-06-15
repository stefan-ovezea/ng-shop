const { userEntity } = require('../db/db');
const UserModel = require('../')

module.exports.findAll = () => userEntity.find().map((user) => {
    return new UserModel(user);
});

module.exports.findById = (id) => new User(userEntity.findOne({id: id}));

module.exports.add = (user) => {
    const userToInsert = new UserModel(user);
    return new UserModel(userEntity.insert(userToInsert));
}

module.exports.update = (user) => {
    const userToUpdate = new UserModel(user);
    return userEntity.findAndUpdate({ id: user.id }, (foundUser) => {
        foundUser = userToUpdate;
    });
}

module.exports.remove = (id) => {
    userEntity.findAndRemove({ id });
}
