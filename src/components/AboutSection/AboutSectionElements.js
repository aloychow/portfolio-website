import styled from 'styled-components';


export const AboutContainer =styled.div`
    color: #f9f9f9;
    background: #1F2328;
    display: flex;
    justify-content: center;
    padding: 100px 15px;

    @media screen and (max-width:480px) {
        padding: 100px 15px;
    }

`;

export const AboutWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    max-width: 1100px;
    margin: 10px;
    justify-content: center;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;

    grid-template-areas: ${({imgStart}) => (imgStart 
        ? `'col2 col'` 
        : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
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

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
    } 
`;

export const Heading = styled.h1`
    margin-bottom: 44px;
    font-size: 68px;
    line-height: 1.1;
    font-weight: 600;
    color: #ff0050;
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

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 25px;
    font-size: 25px;
    line-height: 24px;
    color: #fff;
    font-family: "Helvetica Neue", "Helvetica", sans-serif;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 20px;
    }

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
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

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
    } 
`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

/* Add :before styles */

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

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit : cover;
    background: #232a34;
`;