import React from 'react';
import "../styles/nav.css";
//import {logo} from "../data/data.json";
import {Link} from "react-router-dom";
const logo = <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><path d="M61.49 64H2.447C1.1 64 0 62.897 0 61.55V2.45C0 1.102 1.1 0 2.447 0h59.105C62.9 0 64 1.102 64 2.45V61.61c-.06 1.286-1.163 2.39-2.51 2.39z" fill-rule="evenodd" fill="#ec671c"/><path d="M50.1 20.2h-5.017c-.245 0-.367.184-.367.367v22.945c0 .184.184.367.367.367H50.1c.184 0 .367-.184.367-.367V20.558c.06-.184-.122-.367-.367-.367zm-17.13 0H13.83c-.245 0-.367.184-.367.367v22.945c0 .184.184.367.367.367h5.017c.245 0 .367-.184.367-.367v-18c0-.184.184-.367.367-.367h10.83c3.06 0 3.916 2.325 3.916 3.855v14.5c0 .184.184.367.367.367h5.078c.245 0 .367-.184.367-.367V27.227c0-1.346-.184-3.304-1.897-4.956-1.774-1.774-3.426-2.08-5.262-2.08zm-3.54 9.108h-5.262c-.245 0-.367.184-.367.367v13.828c0 .184.184.367.367.367h5.262c.184 0 .367-.184.367-.367V29.675c0-.184-.122-.367-.367-.367z" fill="#fff"/></svg>;
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

function Navbar() {
  return (
    <div className="nav">
        <div className="logo">
            <Link to="/">
                <img id="logoImage" src ={logo} alt="no icon"/>
            </Link>
        </div>

           <a  className="navlinks" href="/#miphones">Mi Phones</a>
           <a   className="navlinks"  href="/#redmiphones">Redmi Phones</a>
           <a   className="navlinks" href="/#tv">TV</a>
           <a   className="navlinks" href="/#laptops">Laptops</a>
           <a   className="navlinks" href="/#lifestyle">Fitness & Lifestyle</a>
           <a  className="navlinks" href="/#home">Home</a>
           <a   className="navlinks" href="/#audio">Radio</a>
           <a   className="navlinks" href="/#accessories">Accessories</a>

        <div className="searchbox">
              <input type="text" name="search"  placeholder="Search Products"/>
              {searchIcon}

        </div>
    </div>
  )
}

export default Navbar