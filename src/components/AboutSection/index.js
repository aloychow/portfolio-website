import React from 'react';
import { Button } from 'react-scroll';
import { Fade, Rotate } from 'react-reveal';
import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
    AboutBg, 
    VideoBg } from './AboutSectionElements'

const AboutSection = ({
    id, 
    imgStart, 
    topLine, 
    headline, 
    description, 
    description2,
    buttonLabel, 
    img, 
    alt}) => {
    return (
        <>
            <AboutContainer id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Fade>
                                    <TopLine>{topLine}</TopLine>
                                </Fade>
                                <Rotate>
                                    <Heading>{headline}</Heading>
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
                                    <Img src={img} alt={alt}/>
                                </ImgWrap>
                            </Fade>
                        </Column2>
                    </AboutRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    );
};

export default AboutSection;
