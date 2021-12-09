function Card (props){
  console.log(props)
  return(
      <template className="elements__template">
        <li className="elements__element">
          <img
            className="elements__image"
            src={props.link}
            alt={props.name}
          />
          <button type="button" className="elements__delete"></button>
          <div className="elements__group">
            <h3 className="elements__name">{props.name}</h3>
            <div className="elements__activity">
              <button type="button" className="elements__like"></button>
              <span className="elements__like-count">{props.likes}</span>
            </div>
          </div>
        </li>
      </template>
  )
}

export default Card