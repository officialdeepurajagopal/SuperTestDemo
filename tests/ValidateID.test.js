const reqData = require('../data/data.js');
const actions = require('../actions/actions.js');

describe('Login and Validate ID', async function () {
    actions.tokenGeneration(reqData.UserDetails.email,reqData.UserDetails.password);
    actions.idValidation();
})