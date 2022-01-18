import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">Bogi.</a>

                    <div className="itemContainer">
                    <PersonIcon className = "icon"></PersonIcon>
                    <span>831-512-3404</span>

                    <div className="itemContainer">
                    <MailIcon className = "icon"></MailIcon>
                    <span>arredondocristian78@gmail.com</span>
                </div>
                </div>
                </div>

                <div className="right">
                    <div className="hamburger">
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
