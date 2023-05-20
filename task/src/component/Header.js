import './Header.css'
import React from "react";
function Header() {
    return (
        <div className="header">
            <div className="logo">LOGO</div>
            
                <ul className="list">
                    <li className='docs'>Docs</li>
                    <li className='about'>About</li>
                    <li className='small-list'>Support Us</li>
                </ul>
            </div>
        
    )
}
export default Header;