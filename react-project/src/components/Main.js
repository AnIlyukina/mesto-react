import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props){

  const [userName, setUserName] = React.useState()
  const [userDescription, setUserDescription] = React.useState()
  const [userAvatar, setUserAvatar] = React.useState()

  React.useEffect(() => {
    api
    .getInfoDate()
    .then((data) => {
      setUserName(data.name)
      setUserDescription(data.about)
      setUserAvatar(data.avatar)
    })
    .catch((err) => {
      console.log(err);
    });
  }, [userName, userDescription, userAvatar])


  const [cards, addCards] = React.useState([])

  React.useEffect(()=>{
    api
      .getInitialCards()
      .then(data => addCards(data))
      .catch((err) => {
        console.log(err);
      });
  }, [])



  return(
    <main className="content">
    <section className="profile">
      <div className="profile__items">
        <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }} >
          <button
            className="profile__edit-button profile__edit-button_type_avatar"
            onClick = {props.onEditAvatar}
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-main">
            <h1 className="profile__info-name">{userName}</h1>
            <button
              type="button"
              className="profile__edit-button profile__edit-button_type_info"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <div className="profile__info-vocation">{userDescription}</div>
        </div>
        <button 
          type="button" 
          className="profile__add-button"
          onClick = {props.onAddPlace}
        ></button>
      </div>
    </section>
    <section className="elements">
      <ul className="elements__grid">
        {
          cards.map(card => <Card key={card._id} card={card} onCardClick={props.onCardClick}/>)  
        }
      </ul>
    </section>
  </main>
  )
}

export default Main;
