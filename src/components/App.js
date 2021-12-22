import React from "react";
import api from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from  "./../context/CurrentUserContext"

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false)
  const [isAddProfilePopupOpen, setIsAddProfilePopupOpen] = React.useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false)

  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  const [currentUser, setCurrentUser] = React.useState(false)

  const [cards, addCards] = React.useState([])

  React.useEffect(()=>{
    Promise.all( [api.getInfoDate(), api.getInitialCards()])
    .then(([user, cards]) => {
      setCurrentUser(user);
      addCards(cards)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])

  function handleCardClick(card){
    setSelectedCard(card)
  }

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
    setSelectedCard({name: '', link: ''})
  }




  return (
    <div className = 'body'>
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header/>
          <Main 
            onEditProfile = {handleEditProfileClick} 
            onAddPlace ={handleAddPlaceClick} 
            onEditAvatar = {handleEditAvatarClick} 
            onCardClick={handleCardClick}
            cards={cards}
            />
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
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
