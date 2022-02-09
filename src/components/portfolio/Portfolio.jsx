import "./portfolio.scss"

export default function Portfolio() {
    /*
    <button type="button"
                onClick={(e) => {
                    e.preventDefault();
                    window.location.href='http://google.com';
                }}
            > Click here</button>
            */
    return (
        <div className="portfolio" id = "portfolio">
            <h1>Portfolio</h1>
            <ul>
                <li className="active">Featured</li>
                <li>Web App</li>
                <li>Mobile App</li>
                <li>Game Development</li>
            </ul>
            <div className="container">
                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Lost In Translation</h3>
                </div>

                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Learn It</h3>
                </div>

                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Game Store</h3>
                </div>

                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Recipe Search</h3>
                </div>

                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Banking App</h3>
                </div>

                <div className="item">
                    <img src="assets/LearnItPic.png" alt=""/>
                    <h3>Banking App</h3>
                </div>
            </div>
        </div>
    )
}
