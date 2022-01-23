import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink 
} from './NavbarElements';

// import Logo from '../../images/website-logo.png';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav= () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff'}}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>

                    {/* <NavLogo /> */}

                        <MobileIcon onClick={toggle}>
                            <FaBars className='link' />
                        </MobileIcon>

                        <NavMenu>
                            <NavItem>
                                <NavLinks className='link' to='home' 
                                smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                    Home
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className='link' to='about'
                                smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                    About
                                </NavLinks>
                            </NavItem>

                            <NavBtn>
                                <NavLogo to='/' onClick={toggleHome} />
                            </NavBtn>


                            <NavItem>
                                <NavLinks className='link' to='projects'
                                smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                    Projects
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks className='link' to='contact'>
                                    Contact
                                </NavLinks>
                            </NavItem>
                        </NavMenu>

                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;
