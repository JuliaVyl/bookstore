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
      </ul>
    </div>
  )
}

export default Categories;