/// <reference types = "cypress"/>

import attributesFactory from '../factories/attributes.factory';
import sensediaAuth from '../support/sensediaAuth';
import authFactory from '../factories/auth.factory';

describe('POST /attributes', () => {
  const auth = authFactory.auth(cy);
  let sensediaAuth = 'fc0f21e5-2e79-4c17-983e-8b601ee7dbf0';

  let attr = attributesFactory.attributes();
  attr.name = `Teste-${Math.floor(Math.random() * 1000)}`;

  // it.only('Capture token', () => {
  //     let sensediaAuth = null
  //     cy.request({
  //         method: 'POST',
  //         url: 'api-manager/api/v3/login',
  //         headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
  //         body: {
  //             login: 'root',
  //             password: 'governance'
  //         }
  //     }).then((res) => {
  //         expect(res.status).to.be.equal(201)
  //         const { code } = res.body
  //         sensediaAuth = code
  //     })
  // });

  it('Create attribute', () => {
    cy.request({
      method: 'POST',
      url: '/api-governance/api/v3/attributes/',
      headers: {
        'Sensedia-Auth': sensediaAuth,
      },
      body: {
        name: attr.name,
        tags: attr.tags,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(201);
    });
  });
  it('Create attribute with invalid token', () => {
    attr.token = 'f4c5b128-d37d-4076-a846-67f3977df0a5';

    cy.request({
      method: 'POST',
      url: '/api-governance/api/v3/attributes/',
      headers: {
        'Sensedia-Auth': attr.token,
      },
      body: {
        name: attr.name,
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.equal(401);
    });
  });

  it('Create attribute no name', () => {
    cy.request({
      method: 'POST',
      url: '/api-governance/api/v3/attributes/',
      headers: {
        'Sensedia-Auth': sensediaAuth,
      },
      body: {
        name: 'novoTeste',
      },
      failOnStatusCode: false,
    }).then((res) => {
      expect(res.status).to.be.equal(401);
    });
  });
});
