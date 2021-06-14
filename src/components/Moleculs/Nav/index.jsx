import React from 'react'
import { useHistory } from 'react-router';
import { NavLink } from 'reactstrap';
import './nav.css';
const Nav = () => {
  var history = useHistory();
  return (
    <nav id="colorlib-main-nav" role="navigation">
      <NavLink href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></NavLink>
      <div className="js-fullheight colorlib-table">
        <div className="colorlib-table-cell js-fullheight">
          {/* <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <input type="text" className="form-control" id="search" placeholder="Enter any key to search..." />
                <button type="submit" className="btn btn-primary"><i className="icon-search3"></i></button>
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-12 sidebar-menu">
              <ul>
                <li className="active"><NavLink onClick={() => history.push('/')}>Home</NavLink></li>
                <li className="side-menu"><NavLink onClick={() => history.push('/service')}>Services</NavLink></li>
                <li className="side-menu"><NavLink onClick={() => history.push('/work')}>Work</NavLink></li>
                <li className="side-menu"><NavLink onClick={() => history.push('/blog')}>Blog</NavLink></li>
                <li className="side-menu"><NavLink onClick={() => history.push('/contact')}>Contact</NavLink></li>
              </ul>
            </div>
          </div>
          {/* Space for ads */}
          {/* <div className="row">
            <div className="col-md-12">
              <h2 className="head-title">Works</h2>
              <NavLink href="assets/images/work-1.jpg" className="gallery image-popup-link text-center"
                style={{ backgroundImage: 'url(assets/images/work-1.jpg)' }}>
                <span><i className="icon-search3"></i></span>
              </NavLink>
              <NavLink href="assets/images/work-2.jpg" className="gallery image-popup-link text-center"
                style={{ backgroundImage: 'url(assets/images/work-2.jpg)' }}>
                <span><i className="icon-search3"></i></span>
              </NavLink>
              <NavLink href="assets/images/work-3.jpg" className="gallery image-popup-link text-center"
                style={{ backgroundImage: 'url(assets/images/work-3.jpg)' }}>
                <span><i className="icon-search3"></i></span>
              </NavLink>
              <NavLink href="assets/images/work-4.jpg" className="gallery image-popup-link text-center"
                style={{ backgroundImage: 'url(assets/images/work-4.jpg)' }}>
                <span><i className="icon-search3"></i></span>
              </NavLink>
            </div>
          </div> */}
          {/* End for ads */}
        </div>
      </div>
    </nav>
  )
}

export default Nav
