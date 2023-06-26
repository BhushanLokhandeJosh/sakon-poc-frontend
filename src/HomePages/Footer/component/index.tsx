import "./styles/styles.css";
import "../../social-icons.css";
import "../../commonStyle.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFacebook,
//   faInstagram,
//   faTwitter,
//   faYoutube,
// } from "@fortawesome/free-brands-svg-icons";
import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiFillTwitterSquare,
  AiOutlineYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="body">
        <div className="footer">
          <div className="content">
            <div className="top">
              <div className="logo-details">
                <span className="logo_name">Josh Software</span>
              </div>
              <div className="media-icons">
                <a href="https://www.facebook.com/">
                  <AiOutlineFacebook />
                </a>

                <a href="https://www.instagram.com/">
                  <AiOutlineInstagram />
                </a>

                <a href="https://www.youtube.com/">
                  <AiFillTwitterSquare />
                </a>

                <a href="https://www.twitter.com/">
                  <AiOutlineYoutube />
                </a>
              </div>
            </div>
            <div className="link-boxes">
              <ul className="box">
                <li className="link_name">Company</li>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Get started</a>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Services</li>
                <li>
                  <a href="#">App design</a>
                </li>
                <li>
                  <a href="#">Web design</a>
                </li>
                <li>
                  <a href="#">Logo design</a>
                </li>
                <li>
                  <a href="#">Banner design</a>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Account</li>
                <li>
                  <a href="#">Profile</a>
                </li>
                <li>
                  <a href="#">My account</a>
                </li>
                <li>
                  <a href="#">Prefrences</a>
                </li>
                <li>
                  <a href="#">Purchase</a>
                </li>
              </ul>
              <ul className="box">
                <li className="link_name">Courses</li>
                <li>
                  <a href="#">HTML & CSS</a>
                </li>
                <li>
                  <a href="#">JavaScript</a>
                </li>
                <li>
                  <a href="#">Photography</a>
                </li>
                <li>
                  <a href="#">Photoshop</a>
                </li>
              </ul>
              <ul className="box input-box">
                <li className="link_name">Subscribe</li>
                <li>
                  <input type="text" placeholder="Enter your email" />
                </li>
                <li>
                  <input type="button" value="Subscribe" />
                </li>
              </ul>
            </div>
          </div>
          <div className="bottom-details">
            <div className="bottom_text">
              <span className="copyright_text">
                Copyright © 2023 <a href="#">Josh Software.</a>All rights
                reserved
              </span>
              <span className="policy_terms">
                <a href="#">Privacy policy</a>
                <a href="#">Terms & condition</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
