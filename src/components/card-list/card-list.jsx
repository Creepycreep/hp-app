import './card-list.scss'

import HPService from '../../services/HPServices';

import PreviewCard from '../preview-card/preview-card'

const CardList = () => {
  const hpService = new HPService();

  const chars = () => {
    hpService
      .getAllCharacters()
      .then(res => {
        const cards = res.map(char => {
          const { id, thumbnail, name } = char;

          return <PreviewCard key={id} thumbnail={thumbnail} name={name} />
        })
        return cards;
      })
  }




  return (
    <div className="card-list">
      {chars()}
    </div>
  )

}
export default CardList