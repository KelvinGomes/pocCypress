/* eslint-disable class-methods-use-this */
/* eslint-disable new-parens */
class Authentication {
  async getToken(login, password) {
    const res = await cy.request({
      method: 'POST',
      url: 'api-manager/api/v3/login',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        login,
        password,
      },
    });
    expect(res.status).to.be.equal(201);
    const { code } = res.body;
    const token = JSON.stringify(code);
    return token;
  }
}

module.exports = new Authentication;
