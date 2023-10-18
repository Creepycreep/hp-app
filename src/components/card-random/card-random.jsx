import { Component } from 'react';

import Icon from '@mdi/react';
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';

import gryffindor from '../../core/assets/icons/gryffindor.svg';
import hufflepuff from '../../core/assets/icons/hufflepuff.svg';
import ravenclaw from '../../core/assets/icons/ravenclaw.svg';
import slytherin from '../../core/assets/icons/slytherin.svg';
import unknown from '../../core/assets/icons/shield-with-question-mark.svg';

import '../card/card.scss';
import './card-random.scss';

import HPService from '../../services/HPServices';
import Spinner from '../spinner/spinner.js';
import Error from '../error/error';

class CardRandom extends Component {
  constructor(props) {
    super(props);
    this.randomData()
  }

  state = {
    char: {},
    loading: true,
    error: false
  }

  hpService = new HPService();

  randomData = () => {
    this.hpService
      .getId(this.getRandomId(46, 0))
      .then(res => {
        const id = res.data.map(item => item.id)[this.getRandomId(99, 0)];

        this.updateChar(id)
      });
  }

  getRandomId = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false })
  }

  onError = () => {
    this.setState({
      loading: false, error: true
    })

  }

  updateChar = (slug) => {
    const id = slug;
    this.hpService
      .getCharacter('1')
      .then(this.onCharLoaded)
      .catch(this.onError);
  }

  render() {
    const { char, loading, error } = this.state;

    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const content = !(isError || isLoading) ? <View char={char} /> : null;

    // if (loading) {
    //   return (
    //     
    //   )
    // }

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
              <button onClick={this.randomData} className='button button--filled random__btn--trigger'>TRY IT</button>
            </div >
          </div>
        </div>
      </section>
    )
  }
}

const View = ({ char }) => {
  const { thumbnail, name, gender, house, blood_status, self, wiki } = char

  const genderIcon = (gender) => {
    if (gender === 'Female') {
      return mdiGenderFemale;
    } else {
      return mdiGenderMale;
    }
  };

  const houseIcon = (house) => {
    switch (house) {
      case 'Gryffindor':
        return gryffindor;
      case 'Hufflepuff':
        return hufflepuff;
      case 'Ravenclaw':
        return ravenclaw;
      case 'Slytherin':
        return slytherin;
      default:
        return unknown;
    }
  }

  return (
    <div className="card random__card">
      <div className="card__image image__box">
        <img src={thumbnail} alt={name} />
      </div>
      <div className="card__title">
        <span>{name}</span>
        <img className='card__house' src={houseIcon(house)} alt={house} />
      </div>
      <div className="card__description">
        <div>
          <span>Gender: </span>
          <Icon path={genderIcon(gender)} size={'24px'} />
        </div>

        <div>
          <span>Blood status:</span>
          <span>{blood_status}</span>
        </div>

      </div>


      <div className="card__controls">
        <a href={self} className='button button--filled'>Homepage</a>
        <a href={wiki} className='button button--outline'>Wiki</a>
      </div>
    </div>
  )
}
export default CardRandom