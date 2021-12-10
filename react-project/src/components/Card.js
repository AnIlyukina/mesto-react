function Card ({card, onCardClick}){

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