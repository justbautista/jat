import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import css from "../styles/About.css"

import image1 from "../../images/About1.jpg";
import image2 from "../../images/About2.jpg";
import image3 from "../../images/About3.jpg";

function About() {
    return (
        <>
            <NavBar />
            <section className="flex flex-row justify-center mx-52 mb-24">
                <div className="flex flex-col section1size content-center">
                    <h1 className="text-4xl text-center mb-12 font-extrabold">Changing the Application Game</h1>
                    <div className="flex flex-row mx-auto">
                        <img src={image3} alt="" className="rounded-md w-40 h-40 shadow-xl dark:shadow-gray-800 mx-8 mt-36" />
                        <img src={image1} alt="" className="rounded-md w-80 h-80 shadow-xl dark:shadow-gray-800 mx-8" />
                        <img src={image2} alt="" className="rounded-md w-40 h-40 shadow-xl dark:shadow-gray-800 mx-8 mt-36" />
                    </div>
                    <div className="mx-24 mt-20">
                        <p className="text-lg border-solid text-center mx-44 "> JAT allows users to not only keep track of their job applications, but encourages them to apply to more job oppurtunities as well. Earn badges and keep your streak going day to day as you look for your new job oppurtunities.</p>
                    </div>
                </div>
            </section>

            <hr />


            <section className="flex flex-row justify-center mx-52 mb-24 mt-24">
                <h1 className="text-4xl text-center mb-12 font-extrabold underline">Our Mission</h1>
            </section>

            <section className="flex flex-row justify-center mx-52 mb-24 mt-8">
                <div className="flex flex-col section1size content-center">
                    <div className="flex flex-row">
                        <div className="mx-24 mt-20">
                            <h1 className="text-4xl text-center mb-12 font-extrabold">Changing the way...</h1>
                            <p className="text- border-solid text-center "> Looking for work is stressful and can be harder than the job itself, JAT turns this process into a game. Simply apply to more jobs to earn badges and keep your streak going. JAT will change the way people find jobs and will modernize the job searching process. </p>
                        </div>
                        <img src={image1} alt="" className="rounded-full w-80 h-80 shadow-xl dark:shadow-gray-800 mr-8 ml-24" />
                    </div>
                </div>
            </section>

            <section className="flex flex-row justify-center mx-52 mb-24 mt-24">
                <div className="flex flex-col section1size content-center">
                    <div className="flex flex-row">
                    <img src={image1} alt="" className="rounded-full w-80 h-80 shadow-xl dark:shadow-gray-800 mr-8 ml-24" />
                        <div className="mx-24 mt-20">
                            <h1 className="text-4xl text-center mb-12 font-extrabold">Keeping you organized!</h1>
                            <p className="text- border-solid text-center "> Job appllications can quicly pile up and become a hassle to keep track of. JAT allows users to save applied jobs to their profile to quickly view and keep track of the applications status. This feature is key to ensuring you stay on top your game, while JAT keeps everything clean.</p>
                        </div>
                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}
export default About;
