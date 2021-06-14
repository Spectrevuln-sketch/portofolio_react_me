import React from 'react'
import { useHistory } from 'react-router-dom'
import { NavLink } from 'reactstrap'

const FooterContent = () => {
  var history = useHistory();
  return (
    <footer>
      <div id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-pb-sm">
              <div className="row">
                <div className="col-md-10">
                  <h2>Let's Talk</h2>
                  <p>Dengan Ini Protofolio Saya Akhiri, Jika Anda Tertarik menggunakan Jasa Saya silahkan Hubungi</p>
                  <p><NavLink href='https://mail.google.com/mail/?view=cm&fs=1&to=gerry@storymadeid.com' style={{ cursor: 'pointer' }}>gerry@storymadeid.com</NavLink></p>
                  <p className="colorlib-social-icons">
                    <NavLink href=""><i className="icon-facebook4"></i></NavLink>
                    <NavLink href=""><i className="icon-instagram2"></i></NavLink>
                    <NavLink href="https://wa.link/1zfio1"><i className="icon-whatsapp"></i></NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 text-center">
              <p>
                &copy;
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                Copyright
                <script>document.write(new Date().getFullYear());</script> | Storymadeid
                {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterContent
