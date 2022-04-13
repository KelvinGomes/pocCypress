///<reference types = "cypress"/>
import exampleFactory from '../factory/example.factory'
import authFactory from '../factory/auth.factory'
import randomUtils from '../utils/random.utils'

before(() => {
    cy.getToken(Cypress.env('user'), Cypress.env('password')).then(token => {
        authFactory.token = token;
    })
})

describe('Example', function () {
    it('Create Attribute', function () {
        exampleFactory.name = randomUtils.getName;
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': authFactory.token
            },
            body: exampleFactory
        }).then(res => {
            expect(res.status).to.be.equal(201);
        })
    })
})

