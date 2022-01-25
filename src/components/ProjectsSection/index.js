import React from 'react';
import { Fade, Rotate } from 'react-reveal';
import Icon1 from '../../images/website-logo.png';
import ClassiFishIcon from '../../images/classifish-icon.png';
import PrimeIcon from '../../images/prime-icon.png';
import WebsiteIcon from '../../images/website-icon.png';
import StocksIcon from '../../images/stocks-icon.png';
import './index.sass';
import './index.css';

import {
    ProjectsContainer,
    ProjectsBg,
    ImageBg,
    ProjectsH1,
    ProjectsWrapper,
    ProjectsCard,
    ProjectsIcon,
    ProjectsH2,
    ProjectsP,
    ProjectSkillsBlue,
    ProjectSkillsRed,
    ProjectSkillsPurple,
    ProjectSkillsPink,
    ProjectSkillsGreen,
    ProjectSkillsBeige,
    ProjectSkillsOrange,
    ProjectSkillsYellow

} from './ProjectsSectionElements';
import Image from '../../images/projects-background.png';

const ProjectsSection = () => {
    return (
        <>
            <ProjectsContainer id='projects'>

                <ProjectsBg>
                    <ImageBg src={Image} />
                </ProjectsBg>


                <Rotate>
                    <ProjectsH1>My Projects</ProjectsH1>
                </Rotate>

                <ProjectsWrapper>

                    <Fade>
                        <ProjectsCard>
                            <ProjectsIcon src={WebsiteIcon} />
                            <ProjectsH2>Personal Website</ProjectsH2>
                            <ProjectsP>A responsive TikTok-inspired portfolio website using React, used to share more about myself, my projects, and interests. </ProjectsP>
                            
                            <ProjectsP>
                                <ProjectSkillsBlue>HTML</ProjectSkillsBlue>
                                <ProjectSkillsRed>CSS</ProjectSkillsRed>
                                <ProjectSkillsPurple>React</ProjectSkillsPurple>
                                <ProjectSkillsGreen>Javascript</ProjectSkillsGreen>
                                <ProjectSkillsBeige>styled-components</ProjectSkillsBeige>
                            </ProjectsP>

                            <ProjectsP>
                                <button class="shrink-border link">Learn More</button>
                            </ProjectsP>
                        </ProjectsCard>
                    </Fade>

                    <Fade>
                        <ProjectsCard>
                            <ProjectsIcon src={PrimeIcon} />
                            <ProjectsH2>Positioning Prime</ProjectsH2>
                            <ProjectsP>Using advanced analytics and deep learning technologies to enhance Prime supermarket's competitive advantage.</ProjectsP>
                        
                            <ProjectsP>
                                <ProjectSkillsOrange>Python</ProjectSkillsOrange>
                                <ProjectSkillsYellow>YOLO</ProjectSkillsYellow>
                                <ProjectSkillsPink>Plotly</ProjectSkillsPink>
                                <ProjectSkillsBlue>Dash</ProjectSkillsBlue>
                                <ProjectSkillsPurple>Flask</ProjectSkillsPurple>
                                <ProjectSkillsRed>Tesseract</ProjectSkillsRed>
                            </ProjectsP>

                            <ProjectsP>
                                <button class="shrink-border link" 
                                type="button"
                                onClick={(e) => {
                                e.preventDefault();
                                window.open("https://github.com/aloychow/Positioning-Prime-Supermarket", "_blank");
                                }}>Learn More</button>
                            </ProjectsP>
                        </ProjectsCard>
                    </Fade>   

                    <Fade>
                        <ProjectsCard>
                            <ProjectsIcon src={ClassiFishIcon} />
                            <ProjectsH2>ClassiFish</ProjectsH2>
                            <ProjectsP>An android application used by Cambodian locals to classify over 30 different fish species present in the Mekong River.</ProjectsP>
                        
                            <ProjectsP>
                                <ProjectSkillsPink>Java</ProjectSkillsPink>
                                <ProjectSkillsBeige>CNNs</ProjectSkillsBeige>
                                <ProjectSkillsOrange>Android</ProjectSkillsOrange>
                                <ProjectSkillsBlue>Deep Learning</ProjectSkillsBlue>
                            </ProjectsP>

                            <ProjectsP>
                                <button class="shrink-border link" 
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.open("https://github.com/aloychow/ClassiFish", "_blank");
                                        }}>Learn More</button>
                            </ProjectsP>
                        </ProjectsCard>
                    </Fade>

                    <Fade>
                        <ProjectsCard>
                            <ProjectsIcon src={StocksIcon} />
                            <ProjectsH2>Stockstockstocks</ProjectsH2>
                            <ProjectsP>A web application for stocks, including technical indicators, sentiment analysis , machine learning, and portfolio optimisation.</ProjectsP>
                        
                            <ProjectsP>
                                <ProjectSkillsRed>Python</ProjectSkillsRed>
                                <ProjectSkillsBlue>Time Series</ProjectSkillsBlue>
                                <ProjectSkillsOrange>Statistics</ProjectSkillsOrange>
                                <ProjectSkillsPink>Sentiment Analysis</ProjectSkillsPink>
                            </ProjectsP>

                            <ProjectsP>
                                <button class="shrink-border link" 
                                        type="button"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        window.open("https://github.com/aloychow/StockStockStocks", "_blank");
                                        }}>Learn More</button>
                            </ProjectsP>
                        </ProjectsCard>
                    </Fade>

                </ProjectsWrapper>
            </ProjectsContainer>
        </>
    )
}

export default ProjectsSection;
