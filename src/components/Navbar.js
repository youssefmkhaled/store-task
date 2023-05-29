import { SlBasket } from "react-icons/sl";
import { Link } from "react-router-dom";


export const Navbar = ({ items }) => {
  let qty = items.reduce((x, y) => x + y.qty, 0);
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark container bg-white my-1 py-3">
        <div className="container">
          <Link to="/products" className="navbar-brand cart text-dark">
            StoreApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item cart">
                <Link to="/products" className="nav-link text-dark">
                  Products
                </Link>
              </li>
              <li className="nav-item text-white cart position-relative">
                <Link to="/cart" className="nav-link text-dark">
                  <SlBasket className="ml-1" />
                  <span className="badge badge-info p-1 mb-2 position-absolute">
                    {qty}
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
