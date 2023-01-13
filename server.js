const express = require("express");
const app = express();
const port = 8000;

const User = require("./models/User");
const Company = require("./models/Company");


app.get("/api/users/new", (req, res) => {
    res.json(new User());
});

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
});

app.get("/api/user/company", (req, res) => {
    res.json({ user: new User(), company: new Company() });
});


// esto tiene que estar debajo de los otros bloques de código
app.listen(port, () => console.log(`Listening on port: ${port}`));

