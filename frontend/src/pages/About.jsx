import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import css from "../styles/About.css"

import image1 from "../../images/About1.jpg";

function About() {
    return (
        <>
            <NavBar />
            <section className="flex flex-row justify-center mx-52 mb-24">
                <div className="flex flex-col section1size content-center">
                    <div className="flex flex-row">
                        <img src={image1} alt="" className="rounded-full w-80 h-80 shadow-xl dark:shadow-gray-800 mr-8 ml-24" />
                        <div className="mx-24 mt-20">
                            <h1 className="text-4xl text-center mb-12 font-extrabold">Applying to Jobs, made fun!</h1>
                            <p className="text- border-solid text-center "> JAT allows users to not only keep track of their job applications, but encourages them to apply to more job oppurtunities as well. Earn badges and keep your streak going day to day as you look for your new job oppurtunities.</p>
                        </div>
                    </div>
                </div>
            </section>

            <hr />

            <section className="flex flex-row justify-center mx-52 mb-24 mt-24">
                <div className="flex flex-col section1size content-center">
                    <div className="flex flex-row">
                        <div className="mx-24 mt-20">
                            <h1 className="text-4xl text-center mb-12 font-extrabold">Applying to Jobs, made fun!</h1>
                            <p className="text- border-solid text-center "> JAT allows users to not only keep track of their job applications, but encourages them to apply to more job oppurtunities as well. Earn badges and keep your streak going day to day as you look for your new job oppurtunities.</p>
                        </div>
                        <img src={image1} alt="" className="rounded-full w-80 h-80 shadow-xl dark:shadow-gray-800 mr-8 ml-24" />
                    </div>
                </div>
            </section>


            <Footer />
        </>
function About(){
    return(
    <>
        <NavBar />
        <div className="container mx-auto text-center">
            <h1 className="text-4xl pt-32 pb-4">Applying to Jobs, made fun!</h1>
            <p className="text-sm border-solid"> JAT allows users to not only keep track of their job applications, but encourages them to apply to more job oppurtunities as well. Earn badges and keep your streak going day to day as you look for your new job oppurtunities.</p>
        </div>
        
        <Footer />
    </>
    )
}

export default About
