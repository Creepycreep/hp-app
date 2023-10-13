import '../card/card.scss'

const CardRandom = () => {
  return (
    <div className="card card--random">
      <div className="card__image image__box"></div>
      <div className="card__title">Harry Potter</div>
      <div className="card__description">As the Norse God of thunder and lightning, Thor wields one of the greatest weapons ever made, the enchanted hammer Mjolnir. While others have described Thor as an over-muscled, oafish imbecile, he's quite smart and compassionate...</div>

      <div className="card__controls">
        <button className='button button--filled'>Homepage</button>
        <button className='button button--outline'>Wiki</button>
      </div>
    </div>
  )
}

export default CardRandom