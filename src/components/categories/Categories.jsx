import style from './categories.module.css';
import SubHeading from '../sub-heading/SubHeading';
import { useProductsSelectors } from '../../store/products';
import CategoryCard from '../category-card/CategoryCard';
import LazyCategoryCard from '../lazy-category-card/LazyCategoryCard';

const Categories = () => {
  const categories = useProductsSelectors.use.productsCategories();
  const productsCategoriesLoading =
    useProductsSelectors.use.productsCategoriesLoading();

  const handleFilterByCategory = () => {
    // create logic to filter by category
  };

  return (
    <div className={style.categories_container}>
      <SubHeading text='Categories' />
      <div className={`${style.categories}`}>
        {!productsCategoriesLoading &&
          categories
            .filter((category) =>
              category.image.toLowerCase().includes('imgur')
            )
            .map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
        {productsCategoriesLoading &&
          [1, 2, 3, 4, 5].map((category) => (
            <LazyCategoryCard key={category} />
          ))}
      </div>
    </div>
  );
};

export default Categories;
