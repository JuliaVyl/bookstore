import { useDispatch, useSelector } from 'react-redux';
import { filterBooksByCategory, filterBooksByText } from '../../actions/actions';
import './categories.css';
import categories from './data';

const Categories = () => {
  const category = 'categories__list-item';
  const activeCategory = category + ' categories__list-item_active';
  const filterCategory = useSelector(state => state.books.filterCategory);

  const dispatch = useDispatch();

  const handleCategory = (val) => { 
    dispatch(filterBooksByCategory(val))
    dispatch(filterBooksByText(''));
  }
  const categoryClass = (currentCategory) => {
    return filterCategory === currentCategory ? activeCategory : category
  }
  return (
    <div className="categories" id="books">
      <ul className="categories__list">
        {categories.map(category => 
          <p key={category} className={categoryClass(category)} onClick={() => handleCategory(category)}>{category}</p>
        )}

        {/* <p className={categoryClass(categories[0])} onClick={() => handleCategory(categories[0])}>{categories[0]}</p>
        <p className={categoryClass(categories[1])} onClick={() => handleCategory(categories[1])}>{categories[1]}</p>
        <p className={categoryClass(categories[2])} onClick={() => handleCategory(categories[2])}>{categories[2]}</p>
        <p className={categoryClass(categories[3])} onClick={() => handleCategory(categories[3])}>{categories[3]}</p>
        <p className={categoryClass(categories[4])} onClick={() => handleCategory(categories[4])}>{categories[4]}</p>
        <p className={categoryClass(categories[5])} onClick={() => handleCategory(categories[5])}>{categories[5]}</p>
        <p className={categoryClass(categories[6])} onClick={() => handleCategory(categories[6])}>{categories[6]}</p> */}
      </ul>
    </div>
  )
}

export default Categories;