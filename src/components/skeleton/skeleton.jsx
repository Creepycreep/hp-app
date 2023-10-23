import './skeleton.scss';

const Skeleton = () => {
  return (
    <div className="skeleton">
      <div className="skeleton__image"></div>
      <div className="skeleton__title"></div>
      <div className="skeleton__description">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="skeleton__controls"></div>
    </div>
  )
}

export default Skeleton