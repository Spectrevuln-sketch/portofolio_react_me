import React from 'react'
import { NavLink } from 'reactstrap';
import './header.css';
const HeaderContent = () => {
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="colorlib-navbar-brand">
              <NavLink href="index.html">
                <div className="header-title">
                  <span>Porto</span>
                  <span>Folio</span>
                </div>
              </NavLink>
            </div>
            <NavLink href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle"><i></i></NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderContent
