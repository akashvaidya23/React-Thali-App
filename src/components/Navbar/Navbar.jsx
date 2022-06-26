import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "whitesmoke",
              fontSize: "25px",
            }}
          >
            <b>The Restaurant</b>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <nav>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      marginLeft: "20px",
                      color: "whitesmoke",
                    }}
                  >
                    Home
                  </Link>
                </nav>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
