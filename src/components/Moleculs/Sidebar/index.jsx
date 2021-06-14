import React from 'react';
import { NavLink } from 'reactstrap';

const Sidebar = () => {
  return (
    <div id="colorlib-about">
      <div className="container">
        <div className="row text-center">
          <h2 className="bold">About</h2>
        </div>
        <div className="row">
          <div className="col-md-5 animate-box">
            <div className="owl-carousel3">
              {/* <div className="item">
                <img className="img-responsive about-img" src="assets/images/about.jpg"
                  alt="html5 bootstrap template by colorlib.com" />
              </div>
              <div className="item">
                <img className="img-responsive about-img" src="assets/images/about-2.jpg"
                  alt="html5 bootstrap template by colorlib.com" />
              </div> */}
            </div>
          </div>
          <div className="col-md-6 col-md-push-1 animate-box">
            <div className="about-desc">
              <div className="owl-carousel3">
                <div className="item">
                  <h2><span>Gerry</span><span>Raditya Kusmana</span></h2>
                </div>
                <div className="item">
                  <h2><span>I'm</span><span>A Fullstack Developer</span></h2>
                </div>
              </div>
              <div className="desc">
                <div className="rotate">
                  <h2 className="heading">About</h2>
                </div>
                <p className="text-capitalize">Hai Saya adalah Seorang Fullstack Developer Yang Berpengalaman Lebih Dari 5 Tahun, Saya Puntelah Membuat Banyak Project Tahun Ini, Keahlian Saya Pada Bahasa Program Javasript Namun Tidak Menuntut Bahasa Program tersebut saya pun telah belajar banyak bahasa program yaitu Golang, Php, Ruby, Python, C++, C# Sampai Frameworknya pun saya mempelajarinya dan sampai sekarang ini saya telah membuat web aplikasi, software aplikasi, mobile apps, maupun Mendevelop Sebuah Game baru Baru Ini Dan Saya Akan Publish Ke Google Play (Coming Soon).</p>
                <p className="colorlib-social-icons">
                  <NavLink href=""><i className="icon-facebook4"></i></NavLink>
                  <NavLink href=""><i className="icon-instagram2"></i></NavLink>
                  <NavLink href="https://wa.link/1zfio1"><i className="icon-whatsapp"></i></NavLink>
                </p>
                <p><NavLink href="tel:+6285814285410" className="btn btn-primary btn-outline">Contact Me!</NavLink></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
