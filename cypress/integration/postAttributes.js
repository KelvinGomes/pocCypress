///<reference types = "cypress"/>
import postFixture from '../fixtures/postFixture.json'
import authentication from "../support/authentication"

describe('PostAttributes', function () {
    it('Create', async function () {
        const token = await authentication.getToken(Cypress.env('user'), Cypress.env('password'));
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': token
            },
            body: postFixture
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })
})

