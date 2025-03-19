import React, { useState, useEffect } from 'react'
import "./Header.scss"

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { text: 'What', color: '#e74c3c', path: '/' },
        { text: 'Why', color: '#f1c40f', path: '/why' },
        { text: 'How', color: '#e84393', path: '/how' },
        { text: "What's New", color: '#2ecc71', path: '/whats-new' }
    ];

    return (
        <div className={`Header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="dot-nav">
                <div>
                    <span className='logo-text'>stressbreak</span>
                </div>
                <div className="links">
                    <ul className="dot-nav__list">
                        {navItems.map((item, index) => (
                            <li key={index} className="dot-nav__item">
                                <a href={item.path} className="dot-nav__link">
                                    <span
                                        className="dot-nav__dot"
                                        style={{ backgroundColor: item.color }}
                                    ></span>
                                    <span className="dot-nav__text">{item.text}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='menu'>
                    <div className='menu-item1'>Login</div>
                    <button className='menu-item2'>Sign Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Header