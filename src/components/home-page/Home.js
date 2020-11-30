import './home.css'
import bg from '../../assets/img/banner.jpg';

const Home = () => (
  <div className="home">
    <div className="home__wrapper">
      <img className="home__bg" src={bg}></img>
      <div className="home__logo">Bookstore</div>
      <div className="home__first-promo">
        <div className="home__first-promo-text promo-text">Charity your old books</div>
      </div>
      <div className="home__second-promo">
        <div className="home__second-promo-text promo-text">top books 2020</div>
      </div>
    </div>
  </div>
)


export default Home;