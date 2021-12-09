function ImagePopup(){
  return(
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
  )
}