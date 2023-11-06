import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.scss'

import ErrorBoundary from '../../components/errorBoundary/errorBoundary';

import Header from '../../components/header/header';
import CardRandom from '../../components/card-random/card-random';

import { MainPage, ListPage, ItemPage } from '../../pages/';

const LostPage = lazy(() => import('../../pages/404'))

const App = () => {

  return (
    <Router>
      <Header />

      <ErrorBoundary>
        <CardRandom />
      </ErrorBoundary>

      <div className="container">
        <main className="main">
          <Suspense fallback={<span>Loading...</span>}>
            <Routes>
              <Route path='/hp-app' element={<MainPage />} />
              <Route path='/hp-app/:category' element={<ListPage />} />
              <Route path='/hp-app/:category/:itemId' element={<ItemPage />} />

              <Route path='*' element={<LostPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>


    </Router>
  );
}

export default App;
