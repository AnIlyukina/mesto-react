import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";



function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddProfilePopupOpen, setIsAddProfilePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick(){
    setIsAddProfilePopupOpen(true)
  }

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false)
    setIsAddProfilePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
  }


  return (
    <div className = 'body'>
      <div className="page">
        <Header/>
        <Main onEditProfile = {handleEditProfileClick} onAddPlace ={handleAddPlaceClick} onEditAvatar = {handleEditAvatarClick} />
        <Footer/>

        <PopupWithForm name='confirm' formName = 'confirmation-form' title ='Вы уверены?' saveButton = 'boxModel' textButton ='Да'/>
      
        <PopupWithForm name='edit' formName = 'edit-form' title = 'Редактировать профиль'  textButton ='Сoхранить' isOpen={isEditProfilePopupOpen} onClose ={closeAllPopups}>
              <input
                id="name"
                name="full-name"
                type="text"
                placeholder="Название"
                className="popup__input popup__input_type_name"
                minLength="2"
                maxLength="40"
                autoComplete="off"
                required
              />
              <span id="name-error" className="error"></span>
              <input
                id="vocation"
                name="vocation"
                type="text"
                placeholder="O себе"
                className="popup__input popup__input_type_vocation"
                minLength="2"
                maxLength="200"
                autoComplete="off "
                required
              />
              <span id="vocation-error" className="error"></span>
        </PopupWithForm>

        <PopupWithForm name ='add' formName='add-form' title ='Новое место' textButton ='Создать' isOpen ={isAddProfilePopupOpen} onClose ={closeAllPopups}>  
              <input
                id="title"
                name="title"
                placeholder="Название"
                type="text"
                className="popup__input popup__input_type_title"
                minLength="2"
                maxLength="30"
                autoComplete="off"
                required
              />
              <span id="title-error" className="error"></span>
              <input
                id="link"
                name="link"
                placeholder="Ссылка"
                type="url"
                className="popup__input popup__input_type_link"
                autoComplete="off"
                required
              />
              <span id="link-error" className="error"></span>
        </PopupWithForm>

        <PopupWithForm name ='avatar' formName ='avatar-form' title = 'Обновить аватар' textButton ='Сохранить' isOpen ={isEditAvatarPopupOpen} onClose ={closeAllPopups}>
              <input
                id="link-avatar"
                name="link"
                placeholder="Ссылка"
                type="url"
                className="popup__input popup__input_type_avatar"
                autoComplete="off"
                required
              />
              <span id="link-avatar-error" className="error"></span>
        </PopupWithForm>



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
    </div>
  );
}

export default App;
