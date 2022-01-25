import React from 'react'
import { useState } from 'react';

import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

import CustomCursor from 'custom-cursor-react';
import 'custom-cursor-react/dist/index.css';

import './style.scss';
import './index.css';

import HomeSection from '../components/HomeSection';
import { homeObj } from '../components/HomeSection/Data';
import AboutSection from '../components/AboutSection';
import { aboutObj } from '../components/AboutSection/Data';
import ProjectsSection from '../components/ProjectsSection';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <CustomCursor
                targets={['.link']}
                opacity={1}
                customClass='custom-cursor'
                dimensions={50}

                fill='transparent'
                smoothness={{
                    movement: 0.5,
                    scale: 0.1,
                    opacity: 0.2,
                }}

                targetOpacity={0.5}
                targetScale={2}

                strokeWidth={3}
                strokeColor={'#00f2ea'}
                />

            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

            <HomeSection { ...homeObj }/>

            <AboutSection { ...aboutObj }/>

            <ProjectsSection />

        </>
    );
}

export default Home;
