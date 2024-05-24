import style from './category.module.css';
import Subheading from '../../components/sub-heading/SubHeading';
import ProductList from '../../components/products-list/ProductsList';
import { useParams } from 'react-router';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';

const Category = () => {
  const categoryName = useParams();
  console.log(categoryName);
  const validCategoryName = categoryName.categoryName;
  const url = `https://dummyjson.com/products/category/${validCategoryName}`;

  const fetchCategory = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading, error, isSuccess } = useReactQuery(
    ['category', url],
    fetchCategory
  );

  if (error) return <div className=''>Error...</div>;
  return (
    <div className={`${style.category} page`}>
      <div className={style.category_name}>
        <Subheading text={categoryName.categoryName} />
      </div>

      <ProductList
        products={data?.products}
        error={error}
        isLoading={isLoading}
        isSuccess={isSuccess}
      />
    </div>
  );
};

export default Category;
