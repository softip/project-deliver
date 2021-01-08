import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido para apredizagem de react    
            <div className="footer-icons">
                <a href="a"><YoutubeIcon /></a>
                <a href="a"><InstagramIcon /></a>
                <a href="a"><LinkedinIcon /></a>
            </div>      
        </footer>
    )
}

export default Footer;