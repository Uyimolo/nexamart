/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import style from './searchResults.module.css';

const SearchResults = ({
  results,
  setSearchTerm,
}) => {
  return (
    <div className={style.search_results_container}>
      {
        <div className={style.search_results}>
          {results?.map((result) => (
            <Link
              onClick={() => setSearchTerm('')}
              to={`/products/${result.id}`}
              key={result.id}
              className={style.search_result}>
              <div className={style.search_result_image}>
                <img src={result.images[0]} alt={result.name} />
              </div>
              <div className={style.search_result_details}>
                <p className={style.search_result_name}>{result.title}</p>
              </div>
            </Link>
          ))}
        </div>
      }
    </div>
  );
};

export default SearchResults;
