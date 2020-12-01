import React, {useState} from "react";

export default function NavBar() {

    const [isActive, setIsActive] = useState(false)

    return (
        <nav className='navbar' role='navigation' aria-label='main navigation'>
            <div className='navbar-brand'>
                <a href='/' className='navbar-item'><img src='https://a.c-dn.net/b/2ScLAW/headline_stock_board.JPG' alt='Logo' width='200' height='28'/></a>

                <a
                    onClick={() => {setIsActive(!isActive)}}
                    role='button'
                    className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
                    aria-label='menu'
                    aria-expanded='false'
                    data-target='navbarBasicExample'>
                </a>
            </div>
            <div id='navbarBasicExample' className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}>
                <div className='navbar-end'>
                    <div className='navbar-item'>
                        <a href='/trades' className='navbar-item'>
                            Trades
                        </a>
                        <a href='/options' className='navbar-item'>
                            Options
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}