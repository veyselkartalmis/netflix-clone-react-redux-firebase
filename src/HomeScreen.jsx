import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import "./homeScreen.scss";

function HomeScreen() {
    return (
        <div className="homeScreen">
            <Navbar />
            <Banner />
        </div>
    )
}

export default HomeScreen;