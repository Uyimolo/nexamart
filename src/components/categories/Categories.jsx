import style from './categories.module.css';
import SubHeading from '../sub-heading/SubHeading';
import CategoryCard from '../category-card/CategoryCard';
import LazyCategoryCard from '../lazy-category-card/LazyCategoryCard';
import useReactQuery from '../../custom-hooks/useReactQuery';

const Categories = () => {
  const fetchCategories = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    return await response.json();
  };

  const {
    data: categories,
    isLoading,
    error,
  } = useReactQuery(['categories'], fetchCategories);

  if (error) return <div>{error}</div>; // todo: create a better component for showing query error message

  return (
    <div className={style.categories_container}>
      <SubHeading text='Categories' />
      <div className={`${style.categories}`}>
        {!isLoading &&
          categories
            .filter((category) =>
              category.image.toLowerCase().includes('imgur')
            )
            .map((category) => (
              <CategoryCard key={category.id} category={category} />
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
