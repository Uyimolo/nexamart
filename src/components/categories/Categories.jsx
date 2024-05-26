import style from './categories.module.css';
import SubHeading from '../sub-heading/SubHeading';
import LazyCategoryCard from '../lazy-category-card/LazyCategoryCard';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
import { Link } from 'react-router-dom';

const Categories = () => {
  const url = `https://dummyjson.com/products/categories`;
  const fetchCategories = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const {
    data: categories,
    isLoading,
    error,
  } = useReactQuery(['categories', url], fetchCategories);

  if (error) return <div>{error}</div>; // todo: create a better component for showing query error message

  return (
    <div className={style.categories_container}>
      <SubHeading text='Categories' />
      <div className={`${style.categories}`}>
        {!isLoading &&
          categories
            .map((category) => (
              <Link to={`/category/${category}`} key={category} className={style.category}>{category.name}</Link>
            ))}
        {isLoading &&
          [1, 2, 3, 4, 5].map((category) => (
            <LazyCategoryCard key={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
