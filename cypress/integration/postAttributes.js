///<reference types = "cypress"/>
import postFixture from '../fixtures/postFixture.json'

describe('PostAttributes', function () {
    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': '118b9de3-a0ac-4c66-bea6-fc2be3ecd6eb'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })
})

