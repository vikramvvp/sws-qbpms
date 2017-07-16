var React = require('react');
var NavLink = require('react-router-dom').NavLink;

// <li>
//                 <NavLink activeClassName='active' to='/qbank' >
//                     QBank
//                 </NavLink>
//             </li>
//             <li>
//                 <NavLink activeClassName='active' to='/qpaper' >
//                     QPaper
//                 </NavLink>
//             </li>

function Nav() {
    return (
        <ul className='nav'>
            <li>
                <NavLink exact activeClassName='active' to='/' >
                    Home
                </NavLink>
            </li>
            
        </ul>
    )
}

module.exports = Nav;