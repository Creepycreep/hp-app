import './search.scss'

import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';


const Search = () => {
  return (
    <div className='search-form'>
      <div className="search-form__header">
        Or find a character by name:
      </div>

      <form className='search-form__form form' action="">
        <div className="form__input">
          <input type="text" placeholder='e.g. Harry Potter' />
          <button className='button button--filled button--search' type='submit'>
            <Icon path={mdiMagnify} size={'24px'} />
          </button>
        </div>
      </form>
    </div>
  )

}

export default Search