import './header.scss'

import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
      <div className="container">
        <h1><Link to="/hp-app/">Hogwarts' information portal</Link></h1>

        <nav className='header__menu menu'>
          <NavLink to='/hp-app/' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')}>Characters</NavLink>
          <span>/</span>
          <NavLink to='/hp-app/spells' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')} >Spells</NavLink>
          <span>/</span>
          <NavLink to='/hp-app/potions' className={({ isActive }) => (isActive ? 'menu__item  is-active' : 'menu__item ')} >Potions</NavLink>
        </nav>
      </div>
    </header>
  )

}


export default Header