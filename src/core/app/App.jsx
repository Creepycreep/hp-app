import './App.scss'

import Header from '../../components/header/header';
import CardRandom from '../../components/card-random/card-random';
import PreviewCard from '../../components/preview-card/preview-card';
import Card from '../../components/card/card';
import Search from '../../components/search/search';

function App() {
  return (
    <>
      <Header />
      <CardRandom />

      <div className="container">
        <main className="main">
          <section className='main__col s-cards'>
            <div className="grid-list">
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
              <PreviewCard />
            </div>

            <button className='button button--filled button--load-more'>load more</button>
          </section>

          <aside className='main__col s-aside'>
            <Search />
            <Card />
          </aside>
        </main>
      </div>

    </>
  );
}

export default App;
