import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;
    padding: 2rem;
    width: 100%;
    box-sizing: border-box;

    @media screen and (max-width: 400px) {
        padding: 30px;
    }

    @media screen and (max-width: 350px) {
        padding: 15px;
    }

`;

export const ProjectsWrapper = styled.div`
    max-width: 1000px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 10px 50px;
    box-sizing: border-box;

    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }

    @media screen and (max-width: 400px) {
        grid-template-columns: 1fr;
        padding: 0;
    }
`;

export const ProjectsCard = styled.div`
    background: #1F2328;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    box-sizing: border-box;
    height: auto;
    padding: 30px;
    margin: 10px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1024px) {
        height: 640px;
    }

    @media screen and (max-width: 915px) {
        height: 670px;
    }

    @media screen and (max-width: 850px) {
        height: 700px;
    }

    @media screen and (max-width: 768px) {
        height: auto;
        margin: 0;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 400px) {
        margin-bottom: 10px;
    }

    &:hover{
        transform: scale(1.02);
        transition: all 0.5s ease-in-out;
        cursor : none;
    }
`;

export const ProjectsIcon = styled.img`
    height: 160px;
    width: auto;
    margin: 20px;

    @media screen and (max-width: 1024px) {
        height: 200px;
    }

    @media screen and (max-width: 900px) {
        height: 160px;
    }

    @media screen and (max-width: 640px) {
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        height: 150px;
    }

    @media screen and (max-width: 480px) {
        height: 120px;
    }
`;

export const ProjectsH1 = styled.h1`
    font-size: 68px;
    color: #00f2ea;
    margin-bottom: 64px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 50px;
    }

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
    } 

`;
    
export const ProjectsH2 = styled.div`
    font-size: 2rem;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;    

    @media screen and (max-width: 480px) {
        font-size: 1.8rem;
    }
`;

export const ProjectsP = styled.p`
    font-size: 1.5rem;
    text-align: left;
    color: #fff;
    margin-bottom: 10px;
    margin-top: 10px;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.2rem;
    }
`;

export const ProjectSkillsBlue = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #25F4EE;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content; 
    transition: all 0.5s ease-in-out; 

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(37, 244, 238, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsRed = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #FE2C55;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(254, 44, 85, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsPurple = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #DC3AFD;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(220, 58, 253, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsPink = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #F1AFDD;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(241, 175, 221, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;


export const ProjectSkillsGreen = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #95d5b2;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(149, 213, 178, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsBeige = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #fefae0;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(254, 250, 224, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsOrange = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #ffba08;
    font-size: 1.3rem;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content;  
    transition: all 0.5s ease-in-out;

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(255, 186, 8, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;

export const ProjectSkillsYellow = styled.div`
    display: flex;
    float: left;
    border-radius: 25px;
    border: 2px solid #e9ff70;
    font-size: 1.3rem ;
    padding: 5px 10px;
    margin: 4px;
    width: fit-content;
    height: fit-content; 
    transition: all 0.5s ease-in-out; 

    &:hover{
        cursor: none;
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        background: rgba(233, 255, 112, 0.3);
    }

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1rem;
    }
`;
