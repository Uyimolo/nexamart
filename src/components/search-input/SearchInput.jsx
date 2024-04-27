/* eslint-disable react/prop-types */
import {
  faClose,
  faMagnifyingGlass,
  faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../icon/Icon';
import style from './searchInput.module.css';

const SearchInput = ({ searchTerm, setSearchTerm, isLoading }) => {
  return (
    <div className={style.search_input}>
      <input
        type='text'
        className={style.input}
        placeholder='What are you looking for?'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className={style.magnifying_glass}>
        <Icon
          icon={
            isLoading && searchTerm.length > 0 ? faSpinner : faMagnifyingGlass
          }
        />
      </div>
      {searchTerm.length > 0 && (
        <div className={style.cancel_search} onClick={() => setSearchTerm('')}>
          <Icon size='medium' icon={faClose} />
        </div>
      )}
    </div>
  );
};

export default SearchInput;
