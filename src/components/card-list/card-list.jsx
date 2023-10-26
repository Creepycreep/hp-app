import { Component } from 'react';

import './card-list.scss'

import HPService from '../../services/HPServices';
import PreviewCard from '../preview-card/preview-card'
import Spinner from '../spinner/spinner.js';
import Error from '../error/error';

class CardList extends Component {
  state = {
    chars: [],
    loading: true,
    error: false,
    loadingMore: false,
    pageSize: 72,
    charsEnded: false,
  }

  hpService = new HPService();

  onCharLoading = () => {
    this.setState({ loadingMore: true })
  }


  onCharLoaded = (newChars) => {
    const ended = newChars.length >= 100 ? true : false;
    this.setState(({ pageSize }) => ({
      charsEnded: ended,
      chars: [...newChars],
      pageSize: pageSize + 9,
      loading: false,
      loadingMore: false
    }))
  }

  onError = () => {
    this.setState({
      loading: false, error: true
    })
  }

  onRequest = (pageSize) => {
    this.onCharLoading();
    this.hpService
      .getAllCharacters(pageSize)
      .then(this.onCharLoaded)
      .catch(this.onError)
  }

  componentDidMount() {
    this.onRequest()
  }

  render() {
    const { chars, loading, error, charsEnded } = this.state;

    if (chars.length === 0) {
      return (<Error />)
    }

    const cards = chars.map(char => {
      const { id, ...props } = char
      return <PreviewCard key={id} {...props} onCharSelected={() => this.props.onCharSelected(id)} />
    })

    const isError = error ? <Error /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const content = !(loading || error || chars.length === 0) ? cards : null;

    return (
      <>
        <div className="card-list" >
          {isError}
          {isLoading}
          {content}
        </div>

        <button
          className='button button--filled button--load-more'
          disabled={this.state.loadingMore}
          onClick={() => this.onRequest(this.state.pageSize)}
          style={{ 'display': charsEnded ? 'none' : 'flex' }}
        >
          load more
        </button>
      </>
    )
  }
}
export default CardList