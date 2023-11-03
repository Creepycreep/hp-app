import './header.scss'

import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
      <div className="container">
        <h1><Link to="/">Hogwarts' information portal</Link></h1>

        <nav className='header__menu menu'>
          <NavLink to='/characters' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')}>Characters</NavLink>
          <span>/</span>
          <NavLink to='/spells' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')} >Spells</NavLink>
          <span>/</span>
          <NavLink to='/potions' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')} >Potions</NavLink>
        </nav>
      </div>
    </header>
  )

}


export default Header