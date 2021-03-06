const data = require('../data/data.js');
const request = require('supertest')
const expect = require('chai').expect;

const reqData = require('../data/data.js');
const endPoints = require('../endpoints/endPoints.js');

let tokenGeneration = function(username, password) {
    it("Token Generation", async function() {
        const UserDetails={
            "email": username,
            "password": password
        }
        return request(endPoints.AirPorts.base).post(endPoints.AirPorts.getTokens)
        .send(UserDetails)
        .expect(200)
        .then(response => {
            if (response.statusCode == 200) {
            access_token = response.body.token;
            }
        });
    });
};

let idValidation = function(id) {
    it("ID Validation", async function() {
        return request(endPoints.AirPorts.base).get(endPoints.AirPorts.getSpecificAirportDetails)
        .then(response =>{
            expect(response.body.data.id).equals(id)
        })
    });
};

let nameValidation = function(name) {
    it("Name Validation", async function() {
        return request(endPoints.AirPorts.base).get(endPoints.AirPorts.getSpecificAirportDetails)
        .then(response =>{
            expect(response.body.data.attributes.name).equals(name)
        })
    });
};

module.exports={
    tokenGeneration,
    idValidation,
    nameValidation
};