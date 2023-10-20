import { Component } from 'react';

import './card-list.scss'

import HPService from '../../services/HPServices';
import PreviewCard from '../preview-card/preview-card'

class CardList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false
  }

  hpService = new HPService();

  chars = () => {
    this.hpService
      .getAllCharacters()
      .then(res => {
        this.onCharLoaded(res)
      })
  }

  onCharLoaded = (chars) => {
    this.setState({ chars, loading: false })
  }

  componentDidMount() {
    this.chars()
  }


  render() {
    const { chars, loading, error } = this.state;
    const cards = chars.map(char => {
      return <PreviewCard key={char.id} image={char.thumbnail} name={char.name} />
    })

    return (
      <div className="card-list" >
        {cards}
      </div>
    )
  }
}
export default CardList