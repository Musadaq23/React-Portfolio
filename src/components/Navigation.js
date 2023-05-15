import React, { useEffect } from "react";
import './Navigation.css';

function Navigation({currentPage, handlePageChange}) {

    useEffect(() => {
        const anchors = document.querySelectorAll('a');
        anchors.forEach((anchor) => {
            if(anchor.href.split('#').pop() === currentPage){
                anchor.classList.add('active');
            } else {
                anchor.classList.remove('active');
            }
        });
    }, [currentPage]);

    return (
        <ul className="navigation">
            <li>
                <a 
                href="#About"
                onClick={() => handlePageChange('About')}>
                    About Me
                </a>
            </li>
            <li>
                <a 
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}>
                    Portfolio
                </a>
            </li>
            <li>
                <a 
                href="#Contact"
                onClick={() => handlePageChange('Contact')}>
                    Contact Me
                </a>
            </li>
            <li>
                <a 
                href="#Resume"
                onClick={() => handlePageChange('Resume')}>
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default Navigation;