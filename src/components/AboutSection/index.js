import React from 'react';
import { Button } from 'react-scroll';

import { Fade, Rotate } from 'react-reveal';

import SkillBar from 'react-skillbars';
import { Skills } from './skills';

import { 
    AboutContainer, 
    AboutWrapper, 
    AboutRow, 
    AboutHeader,
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img
} from './AboutSectionElements'


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
                <AboutWrapper>

                    <div>
                        <AboutHeader>
                            <TopLine>{topLine}</TopLine>
                            <Heading>{headline}</Heading>
                        </AboutHeader>
                    </div>
                    <div>

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
                                    <SkillBar skills={Skills} height={'4vh'}/>
                                    {/* <Img src={img} alt={alt}/> */}
                                </ImgWrap>
                            </Fade>
                        </Column2>
                    </AboutRow>

                    </div>
                </AboutWrapper>
            </AboutContainer>
            
        </>
    );
};

export default AboutSection;
