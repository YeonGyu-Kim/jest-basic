class UserClient {
  login(id, password) {
    return fetch('https://example.com/login') //
      .then((res) => res.json());
  }
}

module.exports = UserClient;
