import './preview-card.scss'

const PreviewCard = ({ name, thumbnail, houseString, onCharSelected }) => {
  const houseColor = (houseString) => {
    switch (houseString) {
      case 'Gryffindor':
        return 'preview-card--gryf';
      case 'Hufflepuff':
        return 'preview-card--huff';
      case 'Ravenclaw':
        return 'preview-card--rav';
      case 'Slytherin':
        return 'preview-card--slyth';
      default:
        return '';
    }
  }


  return (
    <div onClick={onCharSelected} className={`preview-card ${houseColor(houseString)}`}>
      <div className="preview-card__image">
        <img src={thumbnail} alt={name} />
      </div>

      <div className="preview-card__text">
        <span>{name}</span>
      </div>
    </div>
  )

}

export default PreviewCard