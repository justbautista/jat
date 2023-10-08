import JATlogo from "../../images/JAT.png"
import "../styles/NavBar.css"
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
					<Link to="/about" />
					{isAuthenticated ? (
						<>
							<Link to="/dashboard">Dashboard</Link>
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
