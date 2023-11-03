import { useState, useEffect } from 'react';

import './card-list.scss'

import useHPService from '../../services/HPServices';
import PreviewCard from '../preview-card/preview-card'
import Spinner from '../spinner/spinner.js';
import Error from '../error/error';

const CardList = ({ category, onCharSelected }) => {

  const [chars, setChars] = useState([]);
  const [charsEnded, setCharsEnded] = useState(false);
  const [loadingMore, setLoadingMore] = useState(true);

  const [pageSize, setPageSize] = useState(0)


  const { loading, error, getAllCharacters } = useHPService();

  useEffect(() => {
    onRequest()
  }, [category])

  const onRequest = (pageSize, initial = true) => {
    setLoadingMore(!initial)
    getAllCharacters(category, pageSize)
      .then(onCharLoaded)
  }


  const onCharLoaded = (newChars) => {
    setCharsEnded(newChars.length >= 100 ? true : false);
    setChars([...newChars]);
    setPageSize(pageSize => pageSize + 9);
    setLoadingMore(false);
  }

  const cards = chars.map(char => {
    const { id, ...props } = char

    if (category === 'characters') {
      return <PreviewCard key={id} {...props} category={category} onCharSelected={() => onCharSelected(id)} />
    } else {
      return <PreviewCard key={id} {...props} id={id} category={category} />
    }
  })

  const isError = error ? <Error /> : null;
  const isLoading = loading && !loadingMore ? <Spinner /> : null;

  return (
    <>
      <div className="card-list" >
        {isError}
        {isLoading}
        {cards}
      </div>

      <button
        className='button button--filled button--load-more'
        disabled={loadingMore}
        onClick={() => onRequest(pageSize, false)}
        style={{ 'display': charsEnded ? 'none' : 'flex' }}
      >
        load more
      </button>
    </>
  )
}
export default CardList