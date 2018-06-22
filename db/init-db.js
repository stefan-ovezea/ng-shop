const uuid = require('uuid/v1');

module.exports.initialUsers = [
    {
        id: uuid(),
        username: 'test',
        firstName: 'test',
        lastName: 'test',
        password: 'test',
        age: 0,
        address: 'test'
    },
    {
        id: uuid(),
        username: 'test2',
        firstName: 'test2',
        lastName: 'test2',
        password: 'test2',
        age: 0,
        address: 'test2'
    }
];