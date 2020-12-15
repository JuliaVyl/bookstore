import './footer.css';

const Footer = () => {
  return (
    <div className="footer" id="about">
      <div className="footer__wrapper">
          <div className="footer__logo">Bookstore</div>
          <div className="footer__email">
            <p className="footer__email-text">Charity your old books</p>
            <a className="footer__email-link" href="mailto:julia.vyl@gmail.com">Click here</a>
          </div>
          <div className="footer__contacts">
            <a className="footer__contacts-links" href="https://github.com/JuliaVyl">github</a>
            <a className="footer__contacts-links" href="https://www.instagram.com/julvyl/">instagram</a>
          </div>
      </div>
    </div>
  )
}

export default Footer;