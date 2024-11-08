import React from 'react';

function Header() {
    return (
        <nav className='light-blue lighten-3'>
            <div className='nav-wrapper'>
                <a
                    href='https://github.com/abratsiuk/01.react.food'
                    className='brand-logo brown-text text-darken-4'
                    target='_blank'
                >
                    React Food
                </a>
                <ul
                    id='nav-mobile'
                    className='right hide-on-med-and-down'
                >
                    <li>
                        <a
                            href='https://github.com/abratsiuk/01.react.food'
                            className='brown-text text-darken-4'
                            target='_blank'
                        >
                            Repo
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
