import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper container">
                <a href="#!" className="brand-logo">To Do List</a>
                <ul className="right hide-on-med-and-down">
                    {/* <li><a href="sass.html"><i className="material-icons left">search</i>Link with Left Icon</a></li> */}
                    {/* <li><a href="badges.html"><i className="material-icons right">view_module</i>Link with Right Icon</a></li> */}
                </ul>
            </div>
        </nav>
    )
}

export default Header;