import React from "react";
import {CurrentUserContext} from './../context/CurrentUserContext'

function Card ({card, onCardClick}){

  const currentUser = React.useContext(CurrentUserContext);
 
  const isOwn = card.owner._id === currentUser._id;

  const cardDeleteButtonClassName = (
    `card__delete-button ${isOwn ? 'card__delete-button_visible' : 'card__delete-button_hidden'}`
  );



  function handleClick() {
    onCardClick(card);
  } 

  return(
    <li className="elements__element">
      <img
        className="elements__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <button type="button" className="elements__delete"></button>
      <div className="elements__group">
        <h3 className="elements__name">{card.name}</h3>
        <div className="elements__activity">
          <button type="button" className="elements__like"></button>
          <span className="elements__like-count">{card.likes.length}</span>
        </div>
      </div>
    </li>
  )
}

export default Card