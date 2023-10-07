import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";

function Home(){
    return(
    <>
        <NavBar />
        <div className="container mx-auto text-center">
            <h1 className="text-4xl pt-32 pb-4">Applying to Jobs, made fun!</h1>
            <p className="text-sm border-solid"> JAT allows users to not only keep track of their job applications, but encourages them to apply to more job oppurtunities as well. Earn badges and keep your streak going day to day as you look for your new job oppurtunities.</p>
            <LoginButton />
            <LogoutButton />
        </div>
        
        <Footer />
    </>
    )
}

export default Home
