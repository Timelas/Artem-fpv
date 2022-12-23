
  class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }

       getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
          method: 'GET',
          headers: this._headers
          })
          .then(this._checkAnswer)
    }
    }

  const api = new Api({

    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-26',
    headers: {
      authorization: '60bdf67c-096f-4da4-8c27-4a10609300f8',
      'Content-Type': 'application/json'
    }
  });

  export default api;