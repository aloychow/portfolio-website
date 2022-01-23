import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper, 
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute,
    SidebarLogo
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer className='link' isOpen={isOpen} onClick={toggle}>
            <Icon className='link' onClick={toggle}>
                <CloseIcon className='link' />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink className='link' to='home' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink className='link' to='about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink className='link' to='projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink className='link' to='contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarLogo />
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;



