import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
    
    return(
        <div className="header-container">
        <header>
            <h1 >Brophy Disc Golf Scoring</h1>
        </header>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/players'>Players</Link></li>
                    <li><Link to='/scoring'>Scoring</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;