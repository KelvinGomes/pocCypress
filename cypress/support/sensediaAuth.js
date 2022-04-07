
class Auth {
    sensediaAuth(login, password) {
        //let sensediaAuth = null
        cy.request({
            method: 'POST',
            url: 'api-manager/api/v3/login',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded', },
            body: {
                login: login,
                password: password
            }
        }).then((res) => {
            expect(res.status).to.be.equal(201)
            const { code } = res.body
            sensediaAuth = code
        })
    }
}

export default new Auth