import React from "react";
import './styles.css';
function Footer() {
    const year=new Date().getFullYear();
    return(
        <footer>
            <p>© {year} LNMIIT All rights reserved</p>
        </footer>
    );
}

export default Footer;