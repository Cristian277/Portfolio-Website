import "./topbar.scss"
import PersonIcon from '@mui/icons-material/Person';
import MailIcon from '@mui/icons-material/Mail';

//Don't forget to add {} when passing props!

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className = "logo">Arredondo</a>

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
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div> 
        </div>
    )
}
