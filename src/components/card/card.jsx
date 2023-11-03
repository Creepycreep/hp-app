import '../card/card.scss'
import Icon from '@mdi/react';

import { useState, useEffect } from 'react';
import useHPService from '../../services/HPServices';
import { Link } from 'react-router-dom';

import Spinner from '../spinner/spinner.js';
import Error from '../error/error';
import Skeleton from '../skeleton/skeleton';

const Card = (props) => {
  const { loading, error, getCharacter } = useHPService();

  const [char, setChar] = useState(null);

  useEffect(() => {
    updateChar();
  }, [props.charId])


  const updateChar = () => {
    const { charId } = props;

    if (!charId) {
      return
    }
    getCharacter(charId)
      .then(data => {
        onCharLoaded(data)
      })
  }

  const onCharLoaded = (char) => {
    setChar(char);
  }

  const isSkeleton = error || loading || char ? null : <Skeleton />;
  const isError = error ? <Error /> : null;
  const isLoading = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} id={props.charId} /> : null;

  return (
    <div className="card">
      {isSkeleton}
      {isError}
      {isLoading}
      {content}
    </div>
  )
}

const View = ({ char, id }) => {
  const { thumbnail, name, gender, species, house, blood_status, animagus, patronus, wands, born, died, wiki } = char;

  let wandsArr = []
  if (wands) {
    wandsArr = wands.map((wand, i) => {
      return <li key={i}>{wand}</li>
    })
  }

  return (
    <>
      <div className="card__image image__box">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="card__title">
        <span>{name}</span>
        <img className='card__house' src={house} alt={house} />
      </div>

      <div className="card__description">
        {born ?
          <div>
            <span>Born:</span>
            <span>{born}</span>
          </div>
          : null}

        {died ?
          <div>
            <span>Died:</span>
            <span>{died}</span>
          </div>
          : null}

        {species ?
          <div>
            <span>Species:</span>
            <span>{species}</span>
          </div>
          : null}

        <div>
          <span>Gender: </span>
          <Icon path={gender} size={'24px'} />
        </div>

        <div>
          <span>Blood status:</span>
          <span>{blood_status}</span>
        </div>

        {animagus ?
          <div>
            <span>Animagus:</span>
            <span>{blood_status}</span>
          </div>
          : null}

        {patronus ?
          <div>
            <span>Patronus:</span>
            <span>{patronus}</span>
          </div>
          : null}

        {wands ?
          <div>
            <span>Wands:</span>
            <ul className='card__wands'>
              {wandsArr}</ul>
          </div>
          : null}
      </div>

      <div className="card__controls">
        <Link to={`characters/${id}`} className='button button--filled'>Homepage</Link>
        <a href={wiki} className='button button--outline'>Wiki</a>
      </div>
    </>
  )
}

export default Card