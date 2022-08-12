import { BiStore } from 'react-icons/bi';

const Nav = () => {
  return (
    <nav className="  flex justify-between h-16 mx-auto pb-4 border-b-2 border-slate-100">
      <a href="/" className="flex items-center ">
        <BiStore className="text-3xl text-lime-500" />
        <p className="text-2xl ml-2 font-bold text-slate-900">Next</p>
        <p className="text-2xl ml-2 font-bold text-lime-500">Store</p>
      </a>

      <button className="hover:text-indigo-800  text-slate-600">
        Your Cart{' '}
      </button>
    </nav>
  );
};

export default Nav;
