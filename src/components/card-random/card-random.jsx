import { Component } from 'react';

import Icon from '@mdi/react';
import { mdiGenderMale, mdiGenderFemale } from '@mdi/js';

import gryffindor from '../../core/assets/icons/gryffindor.svg';
import hufflepuff from '../../core/assets/icons/hufflepuff.svg';
import ravenclaw from '../../core/assets/icons/ravenclaw.svg';
import slytherin from '../../core/assets/icons/slytherin.svg';

import '../card/card.scss';
import './card-random.scss';

import HPService from '../../services/HPServices';

class CardRandom extends Component {
  constructor(props) {
    super(props);
    // this.updateChar()
  }

  state = {
    thumbnail: null,
    name: null,
    gender: null,
    house: null,
    blood_status: null,
    self: null,
    wiki: null,
  }

  hpService = new HPService();

  updateChar = () => {
    this.hpService
      .getCharacter('harry-potter')
      .then(res => {
        this.setState({
          thumbnail: res.data.attributes.image,
          name: res.data.attributes.name,
          gender: res.data.attributes.gender,
          house: res.data.attributes.house,
          blood_status: res.data.attributes.blood_status,
          self: res.data.links.self,
          wiki: res.data.attributes.wiki,
        })
      });
  }

  render() {
    const { thumbnail, name, gender, house, blood_status, self, wiki } = this.state;

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
          return '';
      }
    }

    return (
      <section className='random'>
        <div className="container">
          <div className="random__body">
            <div className="card random__card">
              <div className="card__image image__box">
                <img src={thumbnail} alt={name} />
              </div>
              <div className="card__title">
                <span>{name}</span>
                <img className='card__house' src={houseIcon(house)} alt={name} />
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

            <div className='random__btn'>
              <p>Random character for today!<br />
                Do you want to get to know him better?</p>

              <p>Or choose another one</p>
              <button className='button button--filled random__btn--trigger'>TRY IT</button>
            </div >
          </div>
        </div>
      </section>
    )
  }
}

export default CardRandom