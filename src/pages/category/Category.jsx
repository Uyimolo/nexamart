import style from './category.module.css';
import Subheading from '../../components/sub-heading/SubHeading';
import ProductList from '../../components/products-list/ProductsList';
import { useParams } from 'react-router';
import useReactQuery from '../../custom-hooks-and-arrays/useReactQuery';
const Category = () => {
  const categoryName = useParams();
  const validCategoryName = categoryName.categoryName;
  console.log(validCategoryName)
  const url = `https://dummyjson.com/products/category/${validCategoryName}`;

  const fetchCategory = async () => {
    const response = await fetch(url);
    return await response.json();
  };

  const { data, isLoading, error, isSuccess } = useReactQuery(
    ['categoryy', url],
    fetchCategory
  );
  if (isLoading) return <div className={style.category}>Loading...</div>;
  if (error) return <div className=''>Error...</div>;
  return (
    <div className={`${style.category} page`}>
      <div className={style.category_name}>
        <Subheading text={categoryName.categoryName} />{' '}
      </div>
      {data && <ProductList products={data?.products} isSuccess={isSuccess} />}
    </div>
  );
};

export default Category;
