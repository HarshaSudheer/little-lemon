import {Link} from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <div>
                    <h1>Little Lemon</h1>
                    <h4>Chicago</h4>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <Link to="/booking"><button data-testid="reserve-btn" aria-label="On Click">Reserve a table</button></Link>
            </div>
            <img id="hero-image" src={require("../assets/hero.png")} alt="Food" height="400px" />
        </section>
    )
}

export default Hero