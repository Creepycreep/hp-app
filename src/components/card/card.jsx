import { Component } from 'react';
import Icon from '@mdi/react';

import '../card/card.scss'

import HPService from '../../services/HPServices';
import Spinner from '../spinner/spinner.js';
import Error from '../error/error';
import Skeleton from '../skeleton/skeleton';

class Card extends Component {
  state = {
    char: null,
    loading: false,
    error: false
  }

  hpService = new HPService();

  componentDidMount() {
    this.updateChar()
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar()
    }
  }

  updateChar = () => {
    const { charId } = this.props;
    // this.wow.no = 0;

    if (!charId) {
      return
    }

    this.onCharLoading();
    this.hpService
      .getCharacter(charId)
      .then(data => {
        this.onCharLoaded(data)
      })
      .catch(this.onError)
  }

  onCharLoaded = (char) => {
    this.setState({ char, loading: false })
  }

  onCharLoading = () => {
    this.setState({ loading: true })
  }

  onError = () => {
    this.setState({
      loading: false, error: true
    })
  }


  render() {
    const { char, loading, error } = this.state;

    const isSkeleton = error || loading || char ? null : <Skeleton />;
    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const content = !(loading || error || !char) ? <View char={char} /> : null;

    return (
      <div className="card">
        {isSkeleton}
        {isError}
        {isLoading}
        {content}
      </div>
    )
  }
}

const View = ({ char }) => {
  const { thumbnail, name, gender, species, house, blood_status, animagus, patronus, wands, born, died, self, wiki } = char;

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
        <a href={self} className='button button--filled'>Homepage</a>
        <a href={wiki} className='button button--outline'>Wiki</a>
      </div>
    </>
  )
}

export default Card