const request = require('supertest')
const expect = require('chai').expect;

const reqData = require('../data/data.js');
const endPoints = require('../endpoints/endPoints.js');

let tokenGeneration = function() {
    it("Token Generation", async function() {
        const query = {
            "email": 'dpuoneplus@gmail.com',
            "password": 'deepu@123'
           };
        return request(endPoints.AirPorts.base).post(endPoints.AirPorts.getTokens)
        .send(query)
        .expect(200)
        .then(response => {
            if (response.statusCode == 200) {
            access_token = response.body.token;
            }
        });
    });
};

let idValidation = function() {
    it("ID validation", async function() {
        console.log(access_token);
        return request(endPoints.AirPorts.base).get(endPoints.AirPorts.getSpecificAirportDetails)
        expect(response.body.data.id).equals(reqData.KIX.ID)
    });
};

module.exports={
    tokenGeneration,
    idValidation
};