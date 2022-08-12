import { useEffect, useState, useRef } from 'react';
import { useAppSelector } from '../app/hooks';
import { useAppDispatch } from '../app/hooks';
import { fetchProducts } from '../features/product-slice';

import ProductBox from './ProductBox';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);

  const categoryRef = useRef<HTMLSelectElement>(null);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  const filterHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(categoryRef.current.value);
  };

  const filteredList = products.filter(
    (product) => product.category === selectedCategory
  );

  const list = selectedCategory === 'All Categories' ? products : filteredList;

  return (
    <div className="mx-auto my-8 w-full">
      <div className="flex justify-start  w-40 ">
        <label htmlFor="category" className="sr-only">
          Category
        </label>
        <select
          id="category"
          name="category"
          required
          className="relative block w-full px-2 py-2 border border-gray-300 placeholder-gray-500 text-gray-500 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Select Category"
          ref={categoryRef}
          defaultValue="All Categories"
          onChange={filterHandler}
        >
          <option>All Categories </option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-2 lg:grid-cols-4 ">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductBox product={product} key={product.id} />
          ))
        ) : (
          <p className="text-xl font-bold tracking-tight text-gray-900">
            {selectedCategory !== 'All Categories'
              ? 'No Products in this category'
              : 'Loading...'}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
