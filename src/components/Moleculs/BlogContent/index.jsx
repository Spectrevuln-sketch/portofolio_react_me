import React from 'react'
import { NavLink } from 'reactstrap'
import { useHistory } from 'react-router-dom'
const BlogContent = () => {
  var history = useHistory();


  return (
    <div id="colorlib-blog">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">Projects</h2>
        </div>
        <div className="row">
          <div className="col-md-12 col-md-offset-0 text-center animate-box intro-heading">
            <span>Projects Demo</span>
            <h2>Read Our Case</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="rotate">
              <h2 className="heading">My Project</h2>
            </div>
          </div>
        </div>
        <div className="row animate-box">
          <div className="owl-carousel1">
            <div className="item">
              <div className="col-md-12">
                <div className="article">
                  <NavLink onClick={() => history.push('/blog')} className="blog-img">
                    <img className="img-responsive" src="assets/images/img-1.jpg" alt="" />
                    <div className="overlay"></div>
                    <div className="link">
                      <span className="read">Read more</span>
                    </div>
                  </NavLink>
                  <div className="desc">
                    <span className="meta">15, Feb 2018</span>
                    <h2><NavLink onClick={() => history.push('/blog')}>A Japanese Constellation</NavLink></h2>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                      of her hometown Bookmarksgrove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="col-md-12">
                <div className="article">
                  <NavLink onClick={() => history.push('/blog')} className="blog-img">
                    <img className="img-responsive" src="assets/images/img-1.jpg" alt="" />
                    <div className="overlay"></div>
                    <div className="link">
                      <span className="read">Read more</span>
                    </div>
                  </NavLink>
                  <div className="desc">
                    <span className="meta">15, Feb 2018</span>
                    <h2><NavLink onClick={() => history.push('/blog')}>A Japanese Constellation</NavLink></h2>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                      of her hometown Bookmarksgrove</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="col-md-12">
                <div className="article">
                  <NavLink onClick={() => history.push('/blog')} className="blog-img">
                    <img className="img-responsive" src="assets/images/img-1.jpg" alt="" />
                    <div className="overlay"></div>
                    <div className="link">
                      <span className="read">Read more</span>
                    </div>
                  </NavLink>
                  <div className="desc">
                    <span className="meta">15, Feb 2018</span>
                    <h2><NavLink onClick={() => history.push('/blog')}>A Japanese Constellation</NavLink></h2>
                    <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline
                      of her hometown Bookmarksgrove</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogContent
