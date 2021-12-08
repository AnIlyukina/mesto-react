function Main(){
  return(
    <main className="content">
    <section className="profile">
      <div className="profile__items">
        <div className="profile__avatar">
          <button
            className="profile__edit-button profile__edit-button_type_avatar"
          ></button>
        </div>
        <div className="profile__info">
          <div className="profile__info-main">
            <h1 className="profile__info-name"></h1>
            <button
              type="button"
              className="profile__edit-button profile__edit-button_type_info"
            ></button>
          </div>
          <div className="profile__info-vocation"></div>
        </div>
        <button type="button" className="profile__add-button"></button>
      </div>
    </section>
    <section className="elements">
      <ul className="elements__grid"></ul>
    </section>
  </main>
  )
}

export default Main;
