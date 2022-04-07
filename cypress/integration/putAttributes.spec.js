///<reference types = 'cypress'/>

import attributesFactory from '../factories/attributes.factory';
import authFactory from '../factories/auth.factory';

var auth = authFactory.auth();
var sensediaAuth = auth.token;

// before(() => {
//     attr.name = 'Teste-' + Math.floor(Math.random() * 1000);
//     attr.tags = ''
//     cy.request({
//         method: 'POST',
//         url: '/api-governance/api/v3/attributes/',
//         headers: {
//             'Sensedia-Auth': sensediaAuth,
//         },
//         body: {
//             name: attr.name,
//             tags: attr.tags,
//         },
//     }).as('response');
//     cy.get('@response').then((res) => {
//         expect(res.status).to.be.equal(201);
//     });
// });

describe('PUT /actions', () => {
    

    it('Edit attribute', () => {
        
    });
    
});