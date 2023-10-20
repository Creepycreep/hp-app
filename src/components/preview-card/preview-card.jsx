import './preview-card.scss'

const PreviewCard = ({ name, image }) => {
  return (
    <div className="preview-card">
      <div className="preview-card__image">
        <img src={image} alt={name} />
      </div>

      <div className="preview-card__text">
        <span>{name}</span>
      </div>
    </div>
  )

}

export default PreviewCard