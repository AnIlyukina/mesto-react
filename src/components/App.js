import React from "react";
import api from "../utils/Api";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import {CurrentUserContext} from  "./../context/CurrentUserContext"
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from "./EditAvatarPopup";


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

   function handleUpdateUser(user){
     api
     .saveInfoDate(user)
     .then((newUserInfo) =>{
      setCurrentUser(newUserInfo)
     })
     .then(()=>{
       closeAllPopups()
     })
     .catch((error) =>{
       console.log(error)
     })
   }

   function handleUpdateAvatar(avatar){
     api
     .changeAvatar(avatar)
     .then((avatar) =>{
      setCurrentUser(avatar)
     })
     .then(() => {
       closeAllPopups()
     })
     .catch((error) => {
       console.log(error)
     })
   }

  function handleCardDelete(card){
    api
    .deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      addCards(newCards);
    }).catch((error) => {
      console.log(error)
    })
  }

  function handleCardLike(card) {

    const isLiked = card.likes.some(like => like._id === currentUser._id);
    
    api
    .changeLikeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      addCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((error) => {
      console.log(error)
    })
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
            onCardLike ={handleCardLike}
            onCardDelete = {handleCardDelete}
            />
          <Footer/>

          <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser = {handleUpdateUser}/>

          <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar ={handleUpdateAvatar}/> 

          <PopupWithForm name='confirm' formName = 'confirmation-form' title ='Вы уверены?' saveButton = 'boxModel' textButton ='Да'/>

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
          
          <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
