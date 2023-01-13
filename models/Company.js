const { faker } = require ('@faker-js/faker');

module.exports = class Company {
    constructor() {
        this._id = faker.datatype.uuid();
        this.name = faker.company.name();
        this.address =
        {
            street: faker.address.streetAddress(),
            city: faker.address.cityName(),
            state: faker.address.state(),
            zip_code: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}