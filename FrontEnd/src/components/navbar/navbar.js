import React from "react";

const Navbar = () => (
<div className="container-fluid">
    <div className="row">
    <div className="col-l12">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        </div>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</div>
);
export default Navbar;