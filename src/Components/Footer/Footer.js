import { FaChevronCircleRight, FaFacebook, FaGithub, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer text-white">
      <div className="container m-auto py-12 px-40 overflow-hidden max-lg:px-6">
        <div className="grid grid-cols-3 gap-8 max-sm:grid-cols-1">
          <div>
            <h3 className="footer__title">Phuc Luu's Portfolio</h3>
            <p className="text-2xl text-neutral-300 mt-8">Thank you for visiting my personal portfolio website.</p>
          </div>
          <div>
            <h3 className="footer__title">Quick Links</h3>
            <ul className="footer__menu mt-8">
              <li className="footer__menu-item hover:text-amber-500">
                <a href="#about">
                  <FaChevronCircleRight className="mr-2" />
                  About
                </a>
              </li>
              <li className="footer__menu-item hover:text-amber-500">
                <a href="#skill">
                  <FaChevronCircleRight className="mr-2" />
                  Skills
                </a>
              </li>
              <li className="footer__menu-item hover:text-amber-500">
                <a href="#education">
                  <FaChevronCircleRight className="mr-2" />
                  Education
                </a>
              </li>
              <li className="footer__menu-item hover:text-amber-500">
                <a href="#project">
                  <FaChevronCircleRight className="mr-2" />
                  Projects
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="footer__title">Contact Info</h3>
            <ul className="footer__info mt-8">
              <li className="footer__info-item text-neutral-300">
                <FaPhone className="mr-4 text-3xl text-amber-500" />
                (+84) 079-610-1169
              </li>
              <li className="footer__info-item text-neutral-300">
                <IoMdMail className="mr-4 text-3xl text-amber-500" />
                phucluu1609@gmail.com
              </li>
              <li className="footer__info-item text-neutral-300">
                <FaMapMarkedAlt className="mr-4 text-3xl text-amber-500" />
                Ho Chi Minh City, Vietnam
              </li>
            </ul>
            <ul className="footer__socials mt-8 flex items-center">
              <li className="footer__social-item">
                <a
                  href="https://github.com/hphuc1609"
                  className="footer__social-link hover:text-amber-500 text-neutral-900"
                >
                  <FaGithub />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="mailto: phucluu1609@gmail.com"
                  className="footer__social-link hover:text-amber-500 text-neutral-900"
                >
                  <IoMdMail />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.facebook.com/hphuc.luu/"
                  className="footer__social-link hover:text-amber-500 text-neutral-900"
                >
                  <FaFacebook />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="spacer"></div>
        <p className="text-center mt-4 text-2xl">
          © 2022. Designed With
          <span className="footer__heart mx-2">❤</span>
          By <span className="text-amber-500 font-medium">Phuc Luu</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
