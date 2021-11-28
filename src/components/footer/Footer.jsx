import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Footer() {

    const {isDarkMode} = useSelector(state => state.theme)

    return (
        <div className="footer-container">
            <div className="footer" style={{color: isDarkMode ? `white` : `black` }}>
                <div className="footer__navigation">
                    <Link className="footer__navigation__link" to="/disclaimer">Disclaimer</Link>
                    <Link className="footer__navigation__link" to="/privacypolicy">Privacy Policy</Link>
                    <Link className="footer__navigation__link" to="terms">Terms and Conditions</Link>
                </div>
                <div className="footer__socials">
                    
                    
                </div>
                <div className="footer__copyright">
                    <p>Jamma Beans</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
