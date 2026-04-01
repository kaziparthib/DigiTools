const NavBar = () => {
  return (
    <div className="navbar py-4 px-10">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="text-3xl bg-gradient-to-b from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent">DigiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonlals</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
         <a className="btn bg-white rounded-full ">Login</a>
        <a className="btn b rounded-full bg-[linear-gradient(to_bottom,_rgba(79,57,246,1)_0%,_rgba(149,20,250,1)_100%)] text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;