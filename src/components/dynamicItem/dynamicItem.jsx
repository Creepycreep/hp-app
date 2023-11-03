import './dynamicItem.scss'

import noImg from '../../core/assets/images/noImg.png'
import Icon from '@mdi/react';
import { mdiArrowLeft } from '@mdi/js';

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import Spinner from '../spinner/spinner.js';
import Error from '../error/error';

import useHPService from '../../services/HPServices';


const DynamicItem = () => {
  const { category, itemId } = useParams();

  const { loading, error, getItem, clearError } = useHPService();
  const [item, setItem] = useState(null);

  useEffect(() => {
    updateItem();
  }, [category, itemId])


  const updateItem = () => {
    clearError()

    if (!itemId) {
      return
    }
    getItem(itemId, category)
      .then(data => {
        onItemLoaded(data)
      })
  }

  const onItemLoaded = (item) => {
    setItem(item);
  }

  const isError = error ? <Error /> : null;
  const isLoading = loading ? <Spinner /> : null;
  const content = !(loading || error || !item) ? <View category={category} item={item} /> : null;

  return (
    <div className="item">
      {isError}
      {isLoading}
      {content}
    </div>
  )
}

const View = ({ item, category }) => {
  const properties = Object.entries(item).map((prop, i) => {
    if (i === 0 || !prop[1] || !prop[1].length || prop[0] === 'image' || prop[0] === 'wiki') {
      return null;
    }

    return (
      <div className="item__item" key={prop[0]}>
        <span>{prop[0].replace('_', ' ')}: </span>
        <span>{Array.isArray(prop[1]) ? prop[1].join(', ') : prop[1]}</span>
      </div>
    )
  })

  return (
    <>
      <Link to={`/${category}`} className='button back'>
        <Icon path={mdiArrowLeft} size={'25px'} />
        Back
      </Link>

      <div className="item__wrapper">
        <div className="item__image">
          <img src={item.image ? item.image : noImg} alt={item.name} />
        </div>

        <div className="item__info">
          {properties}
        </div>
      </div>
    </>
  )
}

export default DynamicItem