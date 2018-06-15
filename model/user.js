class UserModel {
    constructor(user) {
        this.id = user.id;
        this.name = user.name;
        this.age = user.age;
        this.address = user.address;
    }
}

module.exports = UserModel;
