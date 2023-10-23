import { Component } from 'react';

import './App.scss'

import ErrorBoundary from '../../components/errorBoundary/errorBoundary';

import Header from '../../components/header/header';
import CardRandom from '../../components/card-random/card-random';
import Card from '../../components/card/card';
import Search from '../../components/search/search';
import CardList from '../../components/card-list/card-list';

class App extends Component {
  state = {
    selectedChar: null
  }

  onCharSelected = (id) => {
    this.setState({
      selectedChar: id
    })
  }

  render() {
    return (
      <>
        <Header />

        <ErrorBoundary>
          <CardRandom />
        </ErrorBoundary>

        <div className="container">
          <main className="main">
            <section className='main__col s-cards'>
              <ErrorBoundary>
                <CardList onCharSelected={this.onCharSelected} />
              </ErrorBoundary>
            </section>

            <aside className='main__col s-aside'>
              <Search />
              <ErrorBoundary>
                <Card charId={this.state.selectedChar} />
              </ErrorBoundary>
            </aside>
          </main>
        </div>
      </>
    );
  }

}

export default App;
