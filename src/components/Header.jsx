import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className='light-blue lighten-3'>
            <div className='nav-wrapper'>
                <Link
                    to='/'
                    className='brand-logo brown-text text-darken-4'
                >
                    React Food
                </Link>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                >
                    <li>
                        <Link
                            to={`/about`}
                            className='brown-text text-darken-4'
                        >
                            About
                        </Link>
                    </li>

                    <li>
                        <Link
                            to={`/contacts`}
                            className='brown-text text-darken-4'
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
