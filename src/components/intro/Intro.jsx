import "./intro.scss"

export default function Intro() {
    return (
        <div className="intro" id = "intro">
            <div className = "left">
                <div className="imageContainer">
                    <img src = "assets/CA.png" alt=""></img>
                </div>
            </div>
            <div className = "right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Cristian Arredondo</h1>
                    <h3>Software Engineer</h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/white-down-arrow.png"></img>
                </a>
            </div>
        </div>
    )
}
