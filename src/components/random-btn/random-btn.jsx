import './random-btn.scss'

const RandomBtn = () => {
  return (
    <div className='random-btn'>
      <p>Random character for today!<br />
        Do you want to get to know him better?</p>

      <p>Or choose another one</p>
      <button className='button button--filled random-btn--trigger'>TRY IT</button>
    </div >
  )
}

export default RandomBtn