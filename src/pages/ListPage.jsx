import { Helmet } from 'react-helmet';

import { useParams } from 'react-router-dom';

import ErrorBoundary from '../components/errorBoundary/errorBoundary';
import CardList from '../components/card-list/card-list';

const ListPage = () => {

  const { category } = useParams();
  return (
    <section className='main__col s-cards'>
      <Helmet>
        <title>{category}</title>
      </Helmet>

      <ErrorBoundary>
        <CardList category={category} />
      </ErrorBoundary>
    </section>
  )
}

export default ListPage