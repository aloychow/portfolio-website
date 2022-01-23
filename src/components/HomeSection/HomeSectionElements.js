import styled from 'styled-components';


export const HomeContainer =styled.div`
    color: #fff;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    position: relative;
    z-index: 1;

    @media screen and (max-width:480px) {
        padding: 0 10px;
    }

`;

export const HomeWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;

`;

export const HomeRow = styled.div`
    display: grid;
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
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;

`;

export const TopLine = styled.p`
    color: #ff0050;
    font-size: 32px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
    transition: all 0.5s ease-in-out;

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
    }
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 80px;
    line-height: 1.1;
    font-weight: 600;
    color: #00f2ea;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 480px) {
        font-size: 60px;
    }

    @media screen and (max-width: 400px) {
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
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: #FFF;
    transition: all 0.5s ease-in-out;

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
    height: 80%;
    transition: all 0.5s ease-in-out;

    @media screen and (max-width: 768px) {
        height: 1%;
    }

    &:hover{
        transform: scale(1.1);
        transition: all 0.5s ease-in-out;
        cursor : none;
    } 
`; 

export const Img = styled.img`
    min-width: 200px;
    margin: 0 0 10px 0;
    padding-right: 0;
    align: center;
    max-width: 80%;

`;

export const HomeBg = styled.div`
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
    width: 80%;
    height: 80%;
    min-width: 300px;
    -o-object-fit: cover;
    object-fit : cover;
    background: #000;

    @media screen and (max-width:768px) {
        align: top;
        align: center;
        min-width: 200px;
    }
`;