export default {
  auth(cy) {
    try {
      let token;
      cy.auth().then((value) => {
        token = value;
      });

      const data = {
        login: 'root',
        password: 'governance',
        token,
      };
      console.log(JSON.stringify(data));
      return data;
    } catch (error) {
      console.log(JSON.stringify(error));
    }
    return cy;
  },
};
