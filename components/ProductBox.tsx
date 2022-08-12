import Link from 'next/link';

const ProductBox = ({ product }: any) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group relative">
        <div className="w-full min-h-80 border border-slate-200 aspect-w-1 aspect-h-1 rounded-lg overflow-hidden group-hover:-translate-y-1 group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={product.avatar}
            alt={product.name}
            className="w-full h-full object-center object-contain p-2 lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700 mr-3">
              <span aria-hidden="true" className="absolute inset-0 " />
              {product.name}
            </h3>
          </div>
          <p className="text-sm font-medium text-gray-900">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductBox;
