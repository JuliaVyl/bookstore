import err from '../../assets/img/error.png';

import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error">
      <img className="error__pic" src={err}></img>
      <h1 className="error__oops">Opps!</h1>
      <h2 className="error__text">Something went wrong...</h2>
    </div>
  )
}

export default ErrorIndicator;