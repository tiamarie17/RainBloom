import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import ReorderIcon from '@mui/icons-material/Reorder';

function Nav() {
  const user = useSelector((store) => store.user);

  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  const onClickHandler = () => {
    let x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// const[mobileMenu, setMobileMenu] = useState(false);
// const onCLickHandler = () => {
//     setMobileMenu(!mobileMenu)
// }

  return (
    <div className="topnav">

      {/* Navigation links (hidden by default) */}
      <div id="myLinks">
        <Link className="navTitle" to="/home">
          <h2>RainBloom</h2>
        </Link>

        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}
        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/about">
          About
        </Link>
      </div>
      {/* "Hamburger menu" / "Bar icon" to toggle the navigation links */}
      <ReorderIcon onClick={onClickHandler}></ReorderIcon>
    </div>

  );

}

export default Nav;



