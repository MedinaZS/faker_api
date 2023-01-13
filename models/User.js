const { faker } = require ('@faker-js/faker');

module.exports = class User {
    constructor() {
        this._id = faker.datatype.uuid();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phone = faker.phone.number('021-###-###');
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}