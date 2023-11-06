import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Icon from '@mdi/react';
import { mdiGenderMale } from '@mdi/js';

import '../card/card.scss';
import './card-random.scss';

import useHPService from '../../services/HPServices';
import Spinner from '../spinner/spinner.js';
import Error from '../error/error';

const CardRandom = () => {

  const [char, setChar] = useState({})

  useEffect(() => {
    randomData()
  }, [])

  const { loading, error, getId, getCharacter, clearError } = useHPService();

  const randomData = () => {
    // this.wow.no = 0; 
    getId(getRandomId(46, 0))
      .then(res => {
        const id = res.data.map(item => item.id)[getRandomId(99, 0)];

        updateChar(id)
      });
  }

  const getRandomId = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  const onCharLoaded = (char) => {
    setChar(char)
  }

  const updateChar = (slug) => {
    clearError()
    getCharacter(slug)
      .then(onCharLoaded)
  }

  const isError = error ? <Error /> : null;
  const isLoading = loading ? <Spinner /> : null;
  const content = !(isError || isLoading) ? <View char={char} /> : null;

  return (
    <section className='random' data-random="wow">
      <div className="container">
        <div className="random__body">
          {isError}
          {isLoading}
          {content}
          <div className='random__btn'>
            <p>Random character for today!<br />
              Do you want to get to know him better?</p>

            <p>Or choose another one</p>
            <button onClick={randomData} className='button button--filled random__btn--trigger'>TRY IT</button>
          </div >
        </div>
      </div>
    </section>
  )
}

const View = ({ char }) => {
  const { id, thumbnail, name, gender, house, blood_status, wiki } = char

  return (
    <div className="card random__card">
      <div className="card__image image__box">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="card__title">
        <span>{name}</span>
        <img className='card__house' src={house} alt={house} />
      </div>
      <div className="card__description">
        <div>
          <span>Gender: </span>
          <Icon path={gender ? gender : mdiGenderMale} size={'24px'} />
        </div>

        <div>
          <span>Blood status:</span>
          <span>{blood_status}</span>
        </div>

      </div>

      <div className="card__controls">
        <Link to={`hp-app/characters/${id}`} className='button button--filled'>Homepage</Link>
        <a href={wiki} className='button button--outline'>Wiki</a>
      </div>
    </div>
  )
}
export default CardRandom