import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import style from './searchInput.module.css'

const SearchInput = () => {
  return (
    <div className={style.search_input}>
      <input
        type='text'
        className={style.input}
        placeholder='What are you looking for?'
      />
      <div className={style.magnifying_glass}>
        <Icon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default SearchInput;
