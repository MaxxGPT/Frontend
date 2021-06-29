import React from 'react';
import "../Styles/footer.css"



const Footer = () => {
    return(
        <div className="main-footer">
            <div className="nav-over">
                <img src="/assets/Ovalf1.png" alt="Asatera" className="over-1"/>
                <img src="/assets/Ovalf2.png" alt="Asatera" className="over-2"/>
            </div>
            <div className="nav-over-2">
                <img src="/assets/Ovalf1.png" alt="Asatera" className="over-1"/>
                <img src="/assets/Ovalf2.png" alt="Asatera" className="over-2"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <img src="/assets/logo-2.png" alt="logo" className="logo-img"/>
                        <ul className="list-unstyled">
                            <li><a href="tel:+1 (2345) 678-90-1">+1 (2345) 678-90-12</a></li>
                            <li><a href="mailto:support@asatera.com">support@asatera.com</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4> Quick Links </h4>
                        <ul className="list-unstyled">
                            <li><a href="/developers">Developers</a></li>
                            <li><a href="/prices">Prices</a></li>
                            <li><a href="/Developers/#libraries">Libraries</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4> About </h4>
                        <ul className="list-unstyled">
                            <li><a href="/privacy">Privacy</a></li>
                            <li><a href="/terms">Terms and Services</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <h4> Contact </h4>
                        <ul className="list-unstyled">
                            <li><a href="/">Contact Us</a> </li>
                            <li><a href="/">Facebook</a> </li>
                            <li><a href="/">Twitter</a> </li>
                            <li><a href="/">Instagram</a> </li>
                            <li><a href="/">Github</a> </li>
                        </ul>
                    </div>
                </div>
                <hr className="f-hr"/>
                <div className="row pb-2">
                    <div className="col-sm-6">
                        <div className="f-social-div">
                            <a href="/"><i className="fa fa-facebook"></i> </a>
                            <a href="/"><i className="fa fa-twitter"></i> </a>
                            <a href="/"><i className="fa fa-instagram"></i> </a>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <p className="f-copy">
                            &copy;{new Date().getFullYear()} Asatera. All right reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Footer;