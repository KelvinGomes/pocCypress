///<reference types = "cypress"/>
import postFixture from '../fixtures/postFixture.json'

describe('PostAttributes', function () {
    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })
    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })
    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })

    it('Create', function () {
        postFixture.name = "Teste-" + Math.floor(Math.random() * 1000);
        cy.request({
            method: 'POST',
            url: '/api-governance/api/v3/attributes/',
            headers: {
                'Sensedia-Auth': 'f4c5b128-d37d-4076-a846-67f3977df0a5'
            },
            body: postFixture
            //failOnStatusCode: false
        }).as('response')
        cy.get('@response').then(res => {
            expect(res.status).to.be.equal(201)
        })
    })
})

