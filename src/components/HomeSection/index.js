import React, { Components } from 'react';
import { Fade, Rotate } from 'react-reveal';
import Typist from 'react-text-typist';
import { 
    HomeContainer, 
    HomeWrapper, 
    HomeRow, 
    Column1, 
    Column2, 
    TextWrapper, 
    TopLine, 
    Heading, 
    Subtitle, 
    BtnWrap,
    ImgWrap,
    Img,
    HomeBg, 
    VideoBg } from './HomeSectionElements';
import Video from '../../videos/myself.mp4';
import Image from '../../images/prime-icon.png';
import './index.css';

const HomeSection = ({
    id, 
    imgStart, 
    topLine, 
    headline, 
    description, 
    buttonLabel, 
    img, 
    alt}) => {
    return (
        <>
            <HomeContainer id={id}>   
                <HomeBg>
                    <VideoBg autoplay loop muted src={Video} type='video/mp4' />
                </HomeBg>
                <HomeWrapper>
                    <HomeRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Fade duration={4000}>
                                <TopLine>{topLine}</TopLine>
                                </Fade>
                                <Rotate duration={3000}>
                                <Heading>{headline}</Heading>
                                </Rotate>
                                <Fade duration={4000}>
                                    <Typist 
                                        sentences={['An Aspiring Software Engineer', 'A Data Science Enthusiast', 'A Fervent Dessert Lover']} 
                                        loop={true} 
                                        showCursor={true}
                                        cursorBlinkSpeed={1000}
                                        cursorSmooth={true}
                                        pauseTime={2000}
                                        className={'myTypist'}/>                             
                                </Fade>
                                
                                <BtnWrap>
                                    {/* <Button to='home'>{buttonLabel}</Button> */}
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {/* <Img src={Image}/> */}
                                <VideoBg autoPlay muted src={Video} type='video/mp4' />
                            </ImgWrap>
                        </Column2>
                    </HomeRow>
                </HomeWrapper>
            </HomeContainer>
        </>
    );
};

export default HomeSection;
