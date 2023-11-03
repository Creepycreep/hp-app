import { Link } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiHomeOutline } from '@mdi/js';

const LostPage = () => {
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '22px',
        textAlign: 'center'
      }}>

      <h1 style={{ fontSize: '48px' }}>It seems this page doesn't exist...</h1>

      <Link to='/' className='button button--lg button--filled'>
        <Icon path={mdiHomeOutline} size={'30px'} />
        Back to Home
      </Link>
    </div>
  )
}

export default LostPage