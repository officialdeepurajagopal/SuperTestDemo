const request = require('supertest')('https://airportgap.dev-tester.com/api/');
const expect = require('chai').expect;

const data = require('../data/data.js');
const endPoints = require('../endpoints/endPoints.js');

describe('Airport Details Check', function() {
    it('Get Token', async function() {
        const query = {
            "email": 'dpuoneplus@gmail.com',
            "password": 'deepu@123'
           };
        const response = await request.post(endPoints.AirPorts.getTokens)
        .send(query)
        .expect(200);
        const authToken = response.body.token;
    }),
    it('Airport ID validation', async function() {
        const response = await request.get(endPoints.AirPorts.getSpecificAirportDetails);
        expect(response.body.data.id).equals(data.KIX.ID)
    }),
    it('Airport Name validation', async function() {
        const response = await request.get(endPoints.AirPorts.getSpecificAirportDetails);
        expect(response.body.data.attributes.name).equals(data.KIX.name)
    })
})