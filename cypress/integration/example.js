/* eslint-disable cypress/no-async-tests */
/// <reference types = "cypress"/>
import attributesFactory from '../factories/attributes.factory';
import authentication from '../support/authentication';

describe('Example', () => {
  it('Create Attribute', async () => {
    const token = await authentication.getToken(Cypress.env('user'), Cypress.env('password'));
    attributesFactory.name = `Teste-${Math.floor(Math.random() * 1000)}`;
    cy.request({
      method: 'POST',
      url: '/api-governance/api/v3/attributes/',
      headers: {
        'Sensedia-Auth': token,
      },
      body: { attributesFactory },
    }).then((res) => {
      expect(res.status).to.be.equal(200);
    });
  });
});
