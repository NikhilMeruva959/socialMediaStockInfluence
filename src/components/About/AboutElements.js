import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background:#72A0C1;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`

export const AboutWrapper = styled.div`
    padding-left:50px;
    padding-right:50px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items:center;
    grid-gap: 100px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const AboutCard = styled.div`
    background:#fff;
    display:flex;    
    justify-content: flex-start;
    flex-direction:column;
    align-items:center;
    border-radius:20px;
    padding:50px;
    
    box-shadow:0 1px 3px rgba(0,0,0,0.2);

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
    }
`

export const AboutIcon = styled.img`
    height:250px;
    width:250px;
    margin-bottom:10px;
`

export const AboutH1 = styled.h1`
    font-family: sans-serif;
    font-size: 100px;
    color:#fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size:2rem;
    }
`

export const AboutH2 = styled.h2`
    font-size:2rem;
    margin-bottom: 10px;
`

export const AboutP = styled.p`
    font-size:1rem;
    text-align: center;  
`
