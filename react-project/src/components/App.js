import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <div className = 'body'>
      <div className="page">
        <Header/>
        <Main/>
        <Footer/>
        <div className="popup popup_type_edit">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <form
              name="edit-form"
              className="popup__form popup__form_type_edit"
              novalidate
            >
              <h2 className="popup__form-title">Редактировать профиль</h2>
              <input
                id="name"
                name="full-name"
                type="text"
                placeholder="Название"
                class="popup__input popup__input_type_name"
                minlength="2"
                maxlength="40"
                autocomplete="off"
                required
              />
              <span id="name-error" className="error"></span>
              <input
                id="vocation"
                name="vocation"
                type="text"
                placeholder="O себе"
                class="popup__input popup__input_type_vocation"
                minlength="2"
                maxlength="200"
                autocomplete="off "
                required
              />
              <span id="vocation-error" className="error"></span>
              <button type="submit" className="popup__button popup__form-save">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_add">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <form
              name="add-form"
              className="popup__form popup__form_type_add"
              novalidate
            >
              <h2 class="popup__form-title">Новое место</h2>
              <input
                id="title"
                name="title"
                placeholder="Название"
                type="text"
                className="popup__input popup__input_type_title"
                minlength="2"
                maxlength="30"
                autocomplete="off"
                required
              />
              <span id="title-error" className="error"></span>
              <input
                id="link"
                name="link"
                placeholder="Ссылка"
                type="url"
                className="popup__input popup__input_type_link"
                autocomplete="off"
                required
              />
              <span id="link-error" className="error"></span>
              <button type="submit" className="popup__button popup__form-save">
                Создать
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_avatar">
          <div className="popup__container">
            <button type="button" className="popup__close"></button>
            <form
              name="add-form"
              className="popup__form popup__form_type_avatar"
              novalidate
            >
              <h2 className="popup__form-title">Обновить аватар</h2>
              <input
                id="link-avatar"
                name="link"
                placeholder="Ссылка"
                type="url"
                className="popup__input popup__input_type_avatar"
                autocomplete="off"
                required
              />
              <span id="link-avatar-error" className="error"></span>
              <button type="submit" className="popup__button popup__form-save">
                Сохранить
              </button>
            </form>
          </div>
        </div>
        <div className="popup popup_type_confirm">
          <form className="popup__container popup__form" name="confirmation-form">
            <button type="button" className="popup__close"></button>
            <h2 class="popup__form-title">Вы уверены?</h2>
            <button
              type="submit"
              className="
                popup__button popup__form-save boxModel
              "
            >
              Да
            </button>
          </form>
        </div>
        <div className="popup popup_type_image">
          <div className="popup__container popup__container_type_image">
            <button type="button" className="popup__close"></button>
            <img
              className="popup__image"
              src=""
              alt="Публикация"
            />
            <h2 className="popup__image-title"></h2>
          </div>
        </div>
      </div>
      <template className="elements__template">
        <li className="elements__element">
          <img
            className="elements__image"
            src=""
            alt=""
          />
          <button type="button" className="elements__delete"></button>
          <div className="elements__group">
            <h3 className="elements__name"></h3>
            <div className="elements__activity">
              <button type="button" className="elements__like"></button>
              <span className="elements__like-count">6</span>
            </div>
          </div>
        </li>
      </template>
    </div>
  );
}

export default App;
