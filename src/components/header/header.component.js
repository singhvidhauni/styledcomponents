import {Navigation, Logo} from './header.styles';
const Header =(props)=> {
    return (
        <Navigation>
            <Logo>
                <img src="/images/logo.png" alt= "Logo"/>
            </Logo>
        </Navigation>
    );
}
export default Header;
