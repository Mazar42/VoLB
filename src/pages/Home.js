import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Home = () => {
    return(
        <div>
            <Logo/>
            <Navigation/>
            <div className="home">
                <h1>Bienvenue chez VoLb !</h1>
            </div>
            
        </div>
    );
};

export default Home;