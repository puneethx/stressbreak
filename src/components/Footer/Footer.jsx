import React from 'react'
import "./Footer.scss"

const Footer = ({backgroundImage = 'default'}) => {
    return (
        <div className={`Footer footer-${backgroundImage}`}>
            <div className="footdiv">
                <div className='foottop'>
                    <div className='foottop1'>StressBreak</div>
                    <div className='foottop2'>
                        <span className='foothead'>See how it works</span><br />
                        <span className='foottexg'>stressbreak walkthroughs</span>
                    </div>
                </div>
                <div className='footbot'>
                    <div className='footbot1'>
                        <ul>
                            <li>Why people like stressbreak</li>
                            <li>See how it works</li>
                            <li>Stressbreak & journals</li>
                        </ul>
                    </div>
                    <div className='footbot2'>
                        <span>Our Apps</span>
                        <ul>
                            <li>iOS app</li>
                            <li>Android app</li>
                            <li>Browser</li>
                            <li>Windows</li>
                            <li>MacOS app</li>
                        </ul>
                    </div>
                    <div className='footbot2'>
                        <span>About Us</span>
                        <ul>
                            <li>Our manifesto</li>
                            <li>Our promise</li>
                        </ul>
                    </div>
                    <div className='footbot2'>
                        <span>Help and Contact</span>
                        <ul>
                            <li>@stressbreak on Twitter</li>
                            <li>Instagram</li>
                            <li>Video tutorials</li>
                            <li>Sign in to stressbreak</li>
                            <li>Create an account</li>
                        </ul>
                    </div>
                </div>
                <div className='footlast'>
                    <hr />
                    <div className="foolat">
                        <div className='foolatspan'>
                            <span>© mymind, Inc. 2025</span>
                            <span>Made with passion from the VIT-AP University.</span>
                        </div>
                        <div className='foolatul'>
                            <ul>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>FAQ</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer