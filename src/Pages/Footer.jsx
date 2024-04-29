import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import logo from '../assets/Design-Artistic-Art-PNG-Photos.png';


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-black text-white">
  <div className="flex">
    <img className="w-44" src={logo}></img>
    <h2 className="mt-20 font-extrabold text-4xl">ARTCRAFT</h2>
  </div> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
      <div className='space-y-2 mt-6'>
            <nav className="flex  gap-4 md:place-self-center md:justify-self-end">
            <a href="https://www.facebook.com/"><FaFacebookSquare className="text-3xl bg-blue-800"></FaFacebookSquare></a>
            <a href="https://www.youtube.com/"><RiYoutubeLine className="text-3xl  bg-red-500"></RiYoutubeLine></a>
            <a href="https://www.twitter.com/"><CiTwitter className="text-3xl  bg-cyan-600"></CiTwitter></a>
            <a href="https://www.instagram.com/"><FaInstagram className="text-3xl bg-red-500"></FaInstagram></a>
            </nav>
            <p>Phone: +08813463832694</p>
            <address>Email: websupport@justdial.com</address>
      </div>
    </fieldset>
  </form>

</footer>
<footer className="footer footer-center p-4  bg-neutral text-white">
  <aside>
    <p>Copyright © 2024 - All right reserved by ACME Industries Ltd</p>
  </aside>
</footer>
        </div>
    );
};

export default Footer;