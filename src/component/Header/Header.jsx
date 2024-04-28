import { Link, NavLink,} from 'react-router-dom';
import logo from '../../assets/Design-Artistic-Art-PNG-Photos.png';
import light from '../../assets/lightimg.png';
import dark from '../../assets/darkimg.png';
import "./nav.css";
import useAuth from '../../hook/useAuth';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Tooltip } from 'react-tooltip';


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
 
  const {logout, user} = useAuth();
  console.log(user)

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]); 

  const handleLogout = () => {
    logout()
      .then(() => {
        toast.success("Successfully logged out");
      })
      .catch((err) => {
        toast.error(`Logout failed: ${err.message}`);
      });
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); 
  };

    const links = <>
    <li><NavLink to="/" >Home</NavLink></li>
    <li><NavLink to="/craft">All Art And Craft</NavLink></li>
    <li><NavLink to="/add-craft">Add Craft</NavLink></li>
    <li><NavLink to="/list">Add Craft List</NavLink></li>
    </>

    return (
        <div className={`navbar Nav-contain ${darkMode ? 'dark-mode' : 'light-mode'}`}>
            <div className="navbar Nav-contain bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {links}
      </ul>
    </div>
    <img className='w-24' src={logo} alt=''></img>
    <a className="btn btn-ghost text-xl md:text-2xl font-extrabold">ARTCRAFT</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>


<div className="navbar-end">
          <div className="relative md:border-l flex items-center justify-end w-full md:w-auto pl-5">
            <div className="w-[50px]">
              <button onClick={toggleDarkMode}  className="p-1 mr-3 flex items-center">
                <img
                  className="md:w-full w-10 object-cover"
                  src={darkMode ? light : dark}
                  alt={darkMode ? 'Light Mode' : 'Dark Mode'}
                />
              </button>
            </div>

            {user ? (
              <div className="dropdown dropdown-end">
               <label tabIndex={0} className="btn btn-ghost btn-circle" >
               <Tooltip
                  // Don't forget the `.`!
                  anchorSelect=".btn-circle"
                  content={user?.displayName  || user.email}
                />
              <div className="w-10 rounded-full">
                <img src={user?.photoURL || 'https://i.postimg.cc/c4RMWFc4/unnamed.png'} alt="User Avatar" />
              </div>
            </label>
                {/* <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip  tooltip-left" data-tip={user?.displayName  || user.email}> */}
                
              
                    <button onClick={handleLogout} className="btn btn-sm btn-glass">
                      <RiLogoutCircleRLine></RiLogoutCircleRLine> Logout 
                    </button>
                  
                
              </div>
            ) : (
              <>
              <Link to="/login">
                <button className="btn btn-sm md:text-xl btn-ghost">Login</button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-sm md:text-xl btn-ghost mr-4">Sign Up</button>
              </Link>
            </>
            )}
            
          </div>
        </div>
      </div>


 </div>

    );
};

export default Header;