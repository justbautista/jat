import JATlogo from "../../images/JAT.png"
import { Link } from "react-router-dom"
import LoginButton from "./LoginButton"
import LogoutButton from "./LogoutButton"
import { useAuth0 } from "@auth0/auth0-react"

function NavBar() {
	const { isAuthenticated } = useAuth0()

	return (
		<nav className="navbar p-4">
			<div className="container mx-auto flex justify-between items-center ">
				<a href="#">
					<img src={JATlogo} alt="JAT logo" className="w-30 h-20" />
				</a>
				<ul className="flex space-x-4">
					{isAuthenticated ? (
						<>
							<Link  className="bg-black hover:bg-slate-400 text-white hover:text-black  py-2 px-4 rounded" to="/dashboard">Dashboard</Link>
							<Link  className="bg-black hover:bg-slate-400 text-white hover:text-black  py-2 px-4 rounded" to="/jobpostings">Job Postings</Link>
							<LogoutButton />
						</>
					) : (
                        <>
                            <LoginButton />
                        </>
                    )}
				</ul>
			</div>
            <br />
		</nav>
	)
}

export default NavBar
