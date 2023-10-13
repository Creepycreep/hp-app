import './header.scss'

const Header = () => {

  return (
    <header className='header'>
      <div className="container">
        <h1>Hogwarts' information portal</h1>

        <nav className='header__menu menu'>
          <button href='#' className='menu__item is-active'>Characters</button>
          <span>/</span>
          <button href='#' className='menu__item '>Spells</button>
        </nav>
      </div>
    </header>
  )

}


export default Header