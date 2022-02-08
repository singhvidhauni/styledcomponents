import {Container, Content, BgImage, CTA, TopLogos, Welcome, Details, BottomLogo} from './landing.styles';
const Landing = (props) => {
    return (
        <Container>
            <Content>
                <BgImage/>{/*holder for the landing page back-ground image should be here*/}
                    <CTA>
                        <TopLogos src="images/top.png" alt='' /> {/*holder for your logo-one should be here, to be styled as imgage*/}
                        <Welcome>Welcome all of you</Welcome>
                        <Details> {/*holder for a paragraph of text to be styled as p tag*/}
                            Get premium prices of the brands available on our stores with a wide variety of models and colors  at most affordable prices.
                        </Details>
                        <BottomLogo src = "images/bottom.png" alt='' /> {/*holder for your logo-two should be here, to be styled as image*/}
                    </CTA>
            </Content>
        </Container>
    );
}
export default Landing;
