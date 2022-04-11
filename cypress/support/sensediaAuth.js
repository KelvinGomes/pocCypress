class Auth {
  sensediaAuth(login, password) {
    let token = 'null';
    this.cy.request({
      method: 'POST',
      url: 'api-manager/api/v3/login',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: {
        login,
        password,
      },
    }).then((res) => {
      expect(res.status).to.be.equal(201);
      const { code } = res.body;
      token = code;
      console.log(token).pause();
    });
  }
}

export default new Auth();
