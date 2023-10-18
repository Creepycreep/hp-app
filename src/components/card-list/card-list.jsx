import './card-list.scss'

import PreviewCard from '../preview-card/preview-card'

const CardList = () => {
  const cards = () => {
    return <PreviewCard />
  }
  return (
    <div className="card-list">
      {cards}
    </div>
  )

}
export default CardList