import { useEffect } from 'react';
import { useAppSelector } from '../app/hooks';
import { useAppDispatch } from '../app/hooks';
import { fetchProducts } from '../features/product-slice';

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(products);

  return <div>ProductList</div>;
};

export default ProductList;
