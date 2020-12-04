import './home.css'
import bg from '../../assets/img/banner.jpg';

const Home = () => (
  <div className="home" id="home">
    <div className="home__wrapper">
      <img className="home__bg" src={bg}></img>
      <div className="home__logo">Bookstore</div>
      <a href="#about" className="home__first-promo">
        <div className="home__first-promo-text promo-text">Charity your old books</div>
      </a>
      <a href="#books" className="home__second-promo">
        <div className="home__second-promo-text promo-text">top books 2020</div>
      </a>
    </div>
  </div>
)


export default Home;