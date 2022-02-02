import styled from 'styled-components';


export const AboutContainer =styled.div`
    color: #f9f9f9;
    background: transparent;
    display: flex;
    justify-content: center;
    padding: 100px 15px;
    z-index: 1;
    position: relative;

    @media screen and (max-width:480px) {
        padding: 100px 15px;
    }

`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: auto;
    max-width: 1100px;
    margin: 10px;
    justify-content: center;

`;

export const AboutHeader = styled.div`
    display: grid;
    justify-content: left;
    padding: 0 15px;
    // display-flex: column;
`;

export const AboutResumeButton = styled.div`
    display: grid;
    justify-content: center;
    padding: 0 15px;
    // display-flex: column;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    grid-template-areas: ${({imgStart}) => (imgStart 
        ? `'col2 col'` 
        : `'col1 col2'`)};

    @media screen and (max-width: 1024px) {
        grid-template-areas: ${({imgStart}) => (imgStart
            ? `'col1' 'col2'`
            : `'col1 col1' 'col2 col2'`
        )}
    }
`;

export const Column1 = styled.div`
    padding: 0 15px;
    grid-area: col1;
`;

export const Column2 = styled.div`
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
`;

export const TopLine = styled.p`
    color: #00f2ea;
    font-size: 30px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 25px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

    // &:hover{
    //     transform: scale(1.1);
    //     transition: all 0.5s ease-in-out;
    //     cursor : none;
    // } 
`;

export const Heading = styled.h1`
    margin-bottom: 44px;
    font-size: 80px;
    line-height: 1.1;
    font-weight: 600;
    color: #ff0050;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        font-size: 70px;
    }

    @media screen and (max-width: 600px) {
        font-size: 65px;
    }

    @media screen and (max-width: 480px) {
        font-size: 55px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 25px;
    font-size: 25px;
    // line-height: 24px;
    color: #fff;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 1024px) {
        font-size: 24px;
    }

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }

    @media screen and (max-width: 600px) {
        font-size: 22px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
    transition: all 0.5s ease-in-out;

    // &:hover{
    //     transform: scale(1.1);
    //     transition: all 0.5s ease-in-out;
    //     cursor : none;
    // } 
`;

export const AboutBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const ImageBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    // background: #010606;
`;

export const JourneyHeader = styled.div`
    color: #fff;
    text-align: center;
    font-size: 50px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin: 20px;
    margin-top: 40px;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

`;

export const JourneyContainer = styled.div`
    color: #f9f9f9;
    background: transparent;
    display: block;
    // justify-content: center;
    padding: 100px 15px;
    // z-index: 1;
    position: relative;

    @media screen and (max-width:480px) {
        padding: 100px 15px;
    }
`;

export const JourneySection = styled.div`
    color: #f9f9f9;
    background: transparent;
    justify-content: center;
    padding: 100px 15px;
    // z-index: 1;
    position: relative;
    display: ${props => props.visibility? 'block': 'none'};
    
    @media screen and (max-width:480px) {
        padding: 100px 15px;
    }
`;


export const JourneyType = styled.button`
    margin: 30px;
    font-size: 45px;
    line-height: 24px;
    color: #fff;
    background: transparent;
    border: 0px;
    transition: all 0.5s ease-in-out;
    border-bottom: 5px solid #fff;
    padding-bottom: 30px;

    &:hover {
        transition: all 0.2 ease-in-out;
        // background: #ffffff;
        color: #F5112F;
        transform: scale(1.1);
        border-bottom: 5px solid #F5112F;
    }

    @media screen and (max-width: 1024px) {
        font-size: 37px;
        margin: 20px;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
        margin: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
        margin: 10px;
    }
`;

export const JourneyToggle = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const JourneyContent = styled.div`
    margin: 10px;
    margin-top: -10px;
    margin-left: 0px;
`;

export const JourneyContentRight = styled.div`
    text-align: right;
    // margin: 10px;
    margin-top: -10px;
    margin-right: 0px;
`;


export const JourneyImage = styled.img`
    height: 40px;
    width: 40px;
    // align-items: center;
    vertical-align: middle;
    margin-right: 10px;

    @media screen and (max-width: 780px) {
        height: 35px;
        width: 35px;
    }

    @media screen and (max-width: 780px) {
        height: 30px;
        width: 30px;
    }
`;

export const QualificationData = styled.div`
    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    column-gap: 1.5rem;
`;

export const QualificationRound = styled.div`
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: #fff;
    border-radius: 50%;
    z-index: 2;
    position: relative;
`;

export const QualificationLine = styled.div`
    color: #ff0050;
    display: block;
    width: 2px;
    height: 100%;
    background-color: #fff;
    transform: translate(6px, -7px);
    z-index: 1;
    position: relative;
`;

export const JourneyTitle = styled.div`
    font-size: 40px;
    // color: #fff;

    @media screen and (max-width: 1024px) {
        font-size: 35px;
    }

    @media screen and (max-width: 768px) {
        font-size: 30px;
    }

    @media screen and (max-width: 600px) {
        font-size: 25px;
    }

    @media screen and (max-width: 530px) {
        font-size: 23px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

export const JourneyCompany = styled.div`
    font-size: 30px;
    color: #fff;

    @media screen and (max-width: 1024px) {
        font-size: 25px;
    }

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 600px) {
        font-size: 17px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    }
`;

export const JourneyDate = styled.div`
    font-size: 25px;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    margin-top: 10px;

    @media screen and (max-width: 1024px) {
        font-size: 22px;
    }

    @media screen and (max-width: 768px) {
        font-size: 17px;
    }

    @media screen and (max-width: 600px) {
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 13px;
    }
`;