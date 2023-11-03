import ErrorBoundary from '../components/errorBoundary/errorBoundary';

import DynamicItem from '../components/dynamicItem/dynamicItem';

const ItemPage = () => {
  return (
    <section className='main__col s-cards'>


      <ErrorBoundary>
        <DynamicItem />
      </ErrorBoundary>
    </section>
  )
}

export default ItemPage