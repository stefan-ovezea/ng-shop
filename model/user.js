const uuid = require('uuid/v1');

class UserModel {
    constructor(user) {
        if (user.id)
            this.id = user.id;
        else
            this.id = uuid();
        this.username = user.username;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
        this.address = user.address;
    }
}

module.exports = UserModel;
