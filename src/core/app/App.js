import './App.scss'

import Icon from '@mdi/react';
import { mdiAccountCircleOutline } from '@mdi/js';



function App() {
  return (
    <div className='container'>
      <h1>Lorem</h1>
      <h2>Lorem</h2>
      <h3>Lorem</h3>
      <h4>Lorem</h4>
      <h5>Lorem</h5>
      <h6>Lorem</h6>
      <p>Lorem</p>

      <button className='button button--filled  button--sm'>
        <Icon path={mdiAccountCircleOutline} size={'1em'} />
        <span>Hello</span>
        <Icon path={mdiAccountCircleOutline} size={'1em'} />
      </button>

      <button className='button button--filled'>
        <Icon path={mdiAccountCircleOutline} size={'20px'} />
        <span>Hello</span>
        <Icon path={mdiAccountCircleOutline} size={'20px'} />
      </button>

      <button className='button button--outline button--lg'>
        <Icon path={mdiAccountCircleOutline} size={'20px'} />
        <span>Hello</span>
        <Icon path={mdiAccountCircleOutline} size={'20px'} />
      </button>

      <input type="text" defaultValue={'Hello'} />
    </div>
  );
}

export default App;
