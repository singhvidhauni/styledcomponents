
import styled from 'styled-components';
export const Container = styled.section`
    overflow: hidden;
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
`;

export const Content = styled.div` 
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 80px  40px;
    height: 100%;
`;

export const BgImage = styled.div` 
    height: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    background-image: url("./images/background.jpg"); {/*the image is loaded as a url*/}
    top: 0;
    left: 0;
    right: 0;
    z-index: -1
`;

export const CTA = styled.div`
    margin-bottom: 2vw;
    max-width: 650px;
    display:flex;
    flex-direction:column;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
`;

export const TopLogos = styled.img`
    margin-bottom : 0;
    background-color: none;
    max-width: 700px;
    min-height: 60px;
    display: block;
    width: 100%;
 `;
 export const Welcome = styled.a`
    font-weight: bold;
    color: #f9f9f9;
    background-color: #53afd0;
    margin-bottom: 0px;
    width: 100%;
    letter-spacing: 1.5px;
    font-size: 25px;
    padding: 0;
    border: 1px solid transparent;
    border-radius: 25%;

    &:hover{
        background-color :#0483ee;
    }
`;
export const Details = styled.p`
    color: hsla(0, 0%, 95.3%, 1);
    font-size: 14px;
    margin: 0;
    line-height: 1.5em;
    letter-spacing: 1.5;
`;
export const BottomLogo = styled.img`
    margin-bottom : 0px;
    max-width: 700px;
    min-height: 60px;
    display: inline-block;
    vertical-align: bottom;
    width: 100%;
`; 