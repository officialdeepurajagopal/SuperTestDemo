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

let idValidation = function() {
    it("ID Validation", async function() {
        return request(endPoints.AirPorts.base).get(endPoints.AirPorts.getSpecificAirportDetails)
        expect(response.body.data.id).equals(reqData.KIX.ID)
    });
};

let nameValidation = function() {
    it("Name Validation", async function() {
        return request(endPoints.AirPorts.base).get(endPoints.AirPorts.getSpecificAirportDetails)
        expect(response.body.data.name).equals(reqData.KIX.name)
    });
};

module.exports={
    tokenGeneration,
    idValidation,
    nameValidation
};