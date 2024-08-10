const Navbar = () => {
  return (
    <div className="flex w-full justify-around mt-5 font-bold sticky top-0 bg-white h-20 opacity-95">
      <div className="flex w-1/3 justify-around items-center">
        <h1 className="text-2xl">Shortly</h1>
        <div className="flex ml-6 w-80 justify-between font-bold text-gray-400">
          <h3>Features</h3>
          <h3>Pricing</h3>
          <h3>Resources</h3>
        </div>
      </div>
      <div className="flex w-40 justify-between items-center">
        <button className="">Login</button>
        <button className="bg-teal-400 h-1/2 px-2 rounded-full text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};
export default Navbar;
