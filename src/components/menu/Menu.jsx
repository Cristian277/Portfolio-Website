import "./menu.scss";

export default function Menu({menuOpen, setMenuOpen}) {
    //Space after "menu" is super important, don't forget.
    return (
        <div className = {"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#works">Works</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            
        </div>
    )
}
