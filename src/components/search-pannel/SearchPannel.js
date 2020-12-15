import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBooksByText } from '../../actions/actions';
import './search-pannel.css'
const SearchPannel = ({closeSearchPannel}) => {

  const [value, setValue] = useState('');

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setValue(e.target.value);
  }
  const handleSearch = (e) => { 
    e.preventDefault();
    dispatch(filterBooksByText(value));
    setValue('');
  }

  return (
    <div className="search-pannel">
      <form className="search-pannel__form" onSubmit={handleSearch}>
        <input 
          className="search-pannel__input-field" 
          type="search" 
          placeholder="Write titles or authors of books" 
          value={value} 
          onChange={handleChange}/>
        <button className="search-pannel__btn">Search</button>
      </form>
      <button className="search-pannel__close" onClick={closeSearchPannel}>X</button>
    </div>
  ) 
}

export default SearchPannel;