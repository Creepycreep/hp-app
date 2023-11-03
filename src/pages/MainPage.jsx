import { Helmet } from 'react-helmet';
import { useState } from 'react';

import ErrorBoundary from '../components/errorBoundary/errorBoundary';

import Card from '../components/card/card';
import CardList from '../components/card-list/card-list';

const MainPage = () => {
  const [selectedChar, setSelectedChar] = useState(null)

  const onCharSelected = (id) => {
    setSelectedChar(id)
  }


  return (
    <>
      <Helmet>
        <title>Harry Potter's information portal</title>
      </Helmet>
      <section className='main__col s-cards'>
        <ErrorBoundary>
          <CardList category={'characters'} onCharSelected={onCharSelected} />
        </ErrorBoundary>
      </section>

      <aside className='main__col s-aside'>
        <ErrorBoundary>
          <Card charId={selectedChar} />
        </ErrorBoundary>
      </aside>
    </>
  )
}

export default MainPage