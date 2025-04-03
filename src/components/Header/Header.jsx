import React, { useState, useEffect } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom';
import { isLoggedIn, getCurrentUser, signOut } from '../../services/authService';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Check if user is logged in
        if (isLoggedIn()) {
            setCurrentUser(getCurrentUser());
        }

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSignOut = () => {
        signOut();
        setCurrentUser(null);
        window.location.href = '/';
    };

    const navItems = [
        { text: 'What', color: '#e74c3c', path: '/' },
        { text: 'Why', color: '#f1c40f', path: '/why' },
        { text: 'How', color: '#e84393', path: '/how' },
        { text: "What's New", color: '#2ecc71', path: '/whats-new' }
    ];

    // Get first 8 characters of email or the entire email if less than 8 characters
    const displayEmail = currentUser?.email 
        ? currentUser.email.substring(0, 7) 
        : '';

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
                    {currentUser ? (
                        <>
                            <p className='menu-item1 user-email'>{displayEmail}</p>
                            <button className='menu-item2 sign-out' onClick={handleSignOut}>Sign Out</button>
                        </>
                    ) : (
                        <>
                            <Link to="/signin"><p className='menu-item1'>Login</p></Link>
                            <Link to="/signup"><button className='menu-item2'>Sign Up</button></Link>
                        </>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Header