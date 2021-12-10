class Api {
  constructor(option) {
    this._baseUrl = option.baseUrl;
    this._token = option.token;
  }

// Функция которая возвращает ответ сервера
  _serverResponse(response){
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(`Ошибка: ${response.status}`);
  }
  
  // Получение информации о пользователе с сервера
  getInfoDate() {
    return fetch(`${this._baseUrl}users/me/`, {
      method: "GET",
      headers: {
        authorization: this._token,
        "Content-type": "application/json"
      },
    }).then((res) => { 
      return this._serverResponse(res)
    });
  }

  // Получение массива карточек с сервера
  getInitialCards() {
    return fetch(`${this._baseUrl}cards/`, {
      method: "GET",
      headers: {
        authorization: this._token,
        "Content-type": "application/json"
      },
    }).then((res) => { 
      return this._serverResponse(res)
    });
  }

}

const api = new Api({
  baseUrl: "https://nomoreparties.co/v1/cohort-30/",
  token: "e95f6452-4a83-47bc-9602-e1836af50369",
  },
);

export default api