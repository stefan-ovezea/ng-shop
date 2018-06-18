const loki = require('lokijs');

const { initialUsers } = require('./init-db');

const db = new loki('ng-shop.db');
const userEntity = db.addCollection('user');

userEntity.insert(initialUsers);

module.exports = {
    userEntity
}