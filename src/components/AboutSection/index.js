import React from 'react';
import { Button } from 'react-scroll';

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
    ImageBg
} from './AboutSectionElements'
import Image from '../../images/about-background.png';

const AboutSection = ({
    id, 
    imgStart, 
    topLine, 
    headline, 
    description, 
    description2,
    img, 
    alt}) => {
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
