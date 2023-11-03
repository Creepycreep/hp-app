import './preview-card.scss'

import { Link } from 'react-router-dom';

const PreviewCard = ({ name, thumbnail, houseString, onCharSelected, category, id }) => {
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

  const render = category === 'characters' ?
    <div onClick={onCharSelected} className={`preview-card ${houseColor(houseString)}`}>
      <View thumbnail={thumbnail} name={name} />
    </div>
    :
    <Link to={`/${category}/${id}`} className={`preview-card`}>
      <View thumbnail={thumbnail} name={name} />
    </Link>


  return (
    <>
      {render}
    </>
  )
}

const View = ({ thumbnail, name }) => {
  return (
    <>
      <div className="preview-card__image">
        <img src={thumbnail} alt={name} />
      </div>

      <div className="preview-card__text">
        <span>{name}</span>
      </div>
    </>
  )
}

export default PreviewCard