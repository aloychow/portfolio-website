import React from 'react';
// import { Button } from 'react-scroll';
import { useState } from 'react';

import { Fade, Rotate } from 'react-reveal';

import SkillBar from 'react-skillbars';
import { Skills } from './skills';

import './index.sass'; 
import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    AboutHeader,
    AboutResumeButton,
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    AboutBg,
    ImageBg,

    JourneyHeader,
    JourneyContainer,
    JourneyType,
    JourneyImage,
    JourneySection,
    JourneyToggle,
    JourneyContent,
    JourneyContentRight,
    JourneyTitle,
    JourneyCompany,
    JourneyDate,
    QualificationData,
    QualificationRound,
    QualificationLine
} from './AboutSectionElements'
import Image from '../../images/about-background.png';
import ImageWork from '../../images/work.png';
import ImageStudy from '../../images/study.png';

const AboutSection = ({
    id, 
    imgStart, 
    topLine, 
    headline, 
    description, 
    description2,
    img, 
    alt}) => {

    // Set State Toggle for Work Experience and Education
    const [toggleExperience, setToggleExperience] = useState(true)
    const [toggleEducation, setToggleEducation] = useState(false)

    const handleToggleExperience = () => {
        setToggleExperience(true);
        setToggleEducation(false);
    }
    const handleToggleEducation = () => {
        setToggleExperience(false);
        setToggleEducation(true);
    }

    // Set Colours for Timeline
    const blue = {
        color: '#00fff9',
    };

    const blueBg = {
        backgroundColor: '#00fff9',
    };

    const pink = {
        color: '#ff1791',
    };

    const pinkBg = {
        backgroundColor: '#ff1791',
    };

    const green = {
        color: '#17ffc4',
    };

    const greenBg = {
        backgroundColor: '#17ffc4',
    };

    const orange = {
        color: '#ffbc0a',
    };

    const orangeBg = {
        backgroundColor: '#ffbc0a',
    };
    
    
    
    return (
        <>
            <AboutContainer id={id}>

                <AboutBg>
                    <ImageBg src={Image} />
                </AboutBg>

                <AboutWrapper>
                    <AboutHeader>
                        <TopLine>{topLine}</TopLine>
                        <Heading>{headline}</Heading>
                    </AboutHeader>

                    <AboutRow imgStart={imgStart}>                        
                        <Column1>
                            <TextWrapper>
                                <Fade>
                                    {/* <TopLine>{topLine}</TopLine> */}
                                </Fade>
                                <Rotate>
                                    {/* <Heading>{headline}</Heading> */}
                                </Rotate>
                                <Fade>
                                    <Subtitle>{description}</Subtitle>
                                    <Subtitle>{description2}</Subtitle>
                                </Fade>
                                <BtnWrap>
                                    {/* <Button to='home'>{buttonLabel}</Button> */}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <Fade>
                                <ImgWrap>
                                    <SkillBar skills={Skills} height={'5vh'}/>
                                    {/* <Img src={img} alt={alt}/> */}
                                </ImgWrap>
                            </Fade>
                        </Column2>
                    </AboutRow>

    
                    {/* <JourneyHeader>My Journey</JourneyHeader> */}

                    <JourneyContainer>
                            <JourneyToggle>
                                <JourneyType className='link' onClick={handleToggleExperience}>
                                    {/* <JourneyImage src={ImageWork}/> */}
                                    Experience
                                </JourneyType>
                                <JourneyType className='link' onClick={handleToggleEducation}>
                                    {/* <JourneyImage src={ImageStudy}/> */}
                                    Education
                                </JourneyType>
                            </JourneyToggle>
                            

                        {/* ------------ Experience Section ----------- */}

                        <JourneySection visibility={toggleExperience}>

                        {/* ------------ Qualification 1 ----------- */}
                            <QualificationData>
                                <div>
                                    <JourneyContentRight>
                                        <JourneyTitle style={blue}>Software Engineer</JourneyTitle>
                                        <JourneyCompany>TikTok</JourneyCompany>
                                        <JourneyDate>
                                            <i></i>
                                            Summer 2022
                                        </JourneyDate>
                                    </JourneyContentRight>
                                </div>

                                <div>
                                    <QualificationRound style={blueBg}></QualificationRound>
                                    <QualificationLine style={blueBg}></QualificationLine>
                                </div>
                            </QualificationData>

                            {/* ------------ Qualification 2 ----------- */}
                            
                            <QualificationData>
                                <div></div>

                                <div>
                                    <QualificationRound style={pinkBg}></QualificationRound>
                                    <QualificationLine style={pinkBg}></QualificationLine>
                                </div>

                                <div>
                                    <JourneyContent>
                                        <JourneyTitle style={pink}>Data Science</JourneyTitle>
                                        <JourneyCompany>Johnson & Johnson</JourneyCompany>
                                        <JourneyDate>
                                            <i></i>
                                            05/2021 - 01/2022
                                        </JourneyDate>
                                    </JourneyContent>
                                </div>
                            </QualificationData>
                            
                            {/* ------------ Qualification 3 ----------- */}

                            <QualificationData>
                                <div>
                                    <JourneyContentRight>
                                        <JourneyTitle style={green}>Software Engineer</JourneyTitle>
                                        <JourneyCompany>Conservation International</JourneyCompany>
                                        <JourneyDate>
                                            <i></i>
                                            04/2022 - 08/2022
                                        </JourneyDate>
                                    </JourneyContentRight>
                                </div>

                                <div>
                                    <QualificationRound style={greenBg}></QualificationRound>
                                    <QualificationLine style={greenBg}></QualificationLine>
                                </div>
                            
                            </QualificationData>

                            {/* ------------ Qualification 4 ----------- */}

                            
                            <QualificationData>

                                <div></div>

                                <div>
                                    <QualificationRound style={orangeBg}></QualificationRound>
                                </div>

                                <div>
                                    <JourneyContent>
                                        <JourneyTitle style={orange}>Business Development</JourneyTitle>
                                        <JourneyCompany>Immersively</JourneyCompany>
                                        <JourneyDate>
                                            <i></i>
                                            02/2020 - 05/2020
                                        </JourneyDate>
                                    </JourneyContent>
                                </div>

                            </QualificationData>
                            
                    


                        </JourneySection> 
                                          
                        {/* ------------ Education Section ----------- */}

                        <JourneySection visibility={toggleEducation}>

                        {/* ------------ Qualification 1 ----------- */}
                            <div>
                                <div>
                                    <div>
                                        <JourneyTitle>Double Degree in Business & Computer Science</JourneyTitle>
                                        <JourneyCompany>Nanyang Technological University</JourneyCompany>
                                        <JourneyDate>
                                            <i></i>
                                            08/2019 - 04/2023
                                        </JourneyDate>
                                    </div>
                                </div>   
                            </div>

                        </JourneySection> 

                        
            
                    </JourneyContainer>

                    <AboutResumeButton>
                        <button class="shrink-border link" 
                                type="button"
                                onClick={(e) => {
                                e.preventDefault();
                                window.open("https://drive.google.com/drive/folders/1jlnkcyQxM4SLjmPXOYUCylh3rpLsfTwV", "_blank");
                                }}>View My Resume</button>
                    </AboutResumeButton>



                </AboutWrapper>

            </AboutContainer>
            
        </>
    );
};

export default AboutSection;
