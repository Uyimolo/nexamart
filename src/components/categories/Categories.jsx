import { useEffect, useState } from 'react';
import style from './categories.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { useProductsSelectors } from '../../store/products';

const Categories = () => {
  const [showCategories, setShowCategories] = useState(false);
  const products = useProductsSelectors.use.products();

  const fetchCategories = useProductsSelectors.use.fetchProductsCategories();
  const categories = useProductsSelectors.use.productsCategories();

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  const handleFilterByCategory = () => {
    // create logic to filter by category
  };

  return (
    <div className={style.categories_container}>
      <div
        className={style.categories_toggle}
        onClick={() => setShowCategories((showCategories) => !showCategories)}>
        <p>Browse by category</p>
        <FontAwesomeIcon icon={showCategories ? faCaretUp : faCaretDown} />
      </div>
      <div
        className={`${style.categories} ${showCategories ? style.active : ''}`}>
        {categories &&
          categories
            .filter(
              (category) =>
                category.image.toLowerCase() !==
                'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg'.toLowerCase()
            )
            .map((category) => (
              <p onClick={() => handleFilterByCategory(category)}>
                {category.name}
              </p>
            ))}
      </div>
    </div>
  );
};

export default Categories;
