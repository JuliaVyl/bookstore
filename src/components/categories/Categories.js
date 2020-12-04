import './categories.css';

const Categories = () => {
  return (
    <div className="categories" id="books">
      <ul className="categories__list">
        <a href="#!" className="categories__list-item categories__bestsellers">Bestsellers</a>
        <a href="#!" className="categories__list-item">{`Art & Fashion`}</a>
        <a href="#!" className="categories__list-item">{`Fiction & Poetry`}</a>
        <a href="#!" className="categories__list-item">Biography</a>
        <a href="#!" className="categories__list-item">Children's</a>
        <a href="#!" className="categories__list-item">Education</a>
        <a href="#!" className="categories__list-item">{`Food & Drink`}</a>
      </ul>
    </div>
  )
}

export default Categories;