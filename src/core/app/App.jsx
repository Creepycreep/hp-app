import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss'

import ErrorBoundary from '../../components/errorBoundary/errorBoundary';

import Header from '../../components/header/header';
import CardRandom from '../../components/card-random/card-random';

import { MainPage, ListPage, LostPage, ItemPage } from '../../pages/'

const App = () => {

  return (
    <Router>
      <Header />

      <ErrorBoundary>
        <CardRandom />
      </ErrorBoundary>

      <div className="container">
        <main className="main">
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/:category' element={<ListPage />} />
            <Route path='/:category/:itemId' element={<ItemPage />} />

            <Route path='*' element={<LostPage />} />
          </Routes>
        </main>
      </div>


    </Router>
  );
}

export default App;
