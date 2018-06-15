const loki = require('lokijs');
const uuid = require('uuid/v1');

const db = new loki('ng-shop.db');
const userEntity = db.addCollection('user');

userEntity.insert({
    id: uuid(),
    name: 'test',
    age: 33,
    address: 'test'
});

module.exports = {
    userEntity
}
