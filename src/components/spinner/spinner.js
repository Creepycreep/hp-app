const Spinner = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', background: 'none', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" >
      <g transform="translate(50 42)">
        <g transform="scale(0.8)">
          <g transform="translate(-50 -50)">
            <polygon fill="#e4d8eb" points="72.5 50 50 11 27.5 50 50 50">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2.7027027027027026s" values="0 50 38.5;360 50 38.5" keyTimes="0;1"></animateTransform>
            </polygon>
            <polygon fill="#caacd4" points="5 89 50 89 27.5 50">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2.7027027027027026s" values="0 27.5 77.5;360 27.5 77.5" keyTimes="0;1"></animateTransform>
            </polygon>
            <polygon fill="#b06cc5" points="72.5 50 50 89 95 89">
              <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="2.7027027027027026s" values="0 72.5 77.5;360 72 77.5" keyTimes="0;1"></animateTransform>
            </polygon>
          </g>
        </g>
      </g>
    </svg >
  )
}

export default Spinner