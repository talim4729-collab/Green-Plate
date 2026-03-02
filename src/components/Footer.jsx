import React from 'react';

const Footer = () => {
    return (
        <>
            <footer class="footer">
                <div class="footer-container">

                    <div class="footer-section">
                        <h2 class="logo">Green Plate</h2>
                        <p>
                            Serving fresh, healthy and delicious meals crafted with love.
                            Experience taste and quality in every bite.
                        </p>
                    </div>

                    <div class="footer-section">
                        <h3>Quick Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Reservations</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Contact</h3>
                        <p>📍 123 Green Street, India</p>
                        <p>📞 +91 98765 43210</p>
                        <p>✉ hello@greenplate.com</p>
                    </div>

                    <div class="footer-section">
                        <h3>Opening Hours</h3>
                        <p>Mon - Fri: 8:00 AM - 10:00 PM</p>
                        <p>Sat - Sun: 9:00 AM - 11:00 PM</p>
                    </div>

                </div>

                <div class="footer-bottom">
                    <p>© 2026 Green Plate. All Rights Reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;