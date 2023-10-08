import { useAuth0 } from "@auth0/auth0-react"

export default function LoginButton() {
	const { loginWithRedirect } = useAuth0()

	return (
		<>
			<button
				onClick={() => loginWithRedirect()}
				className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow"
			>
				<div className="absolute inset-0 w-3 bg-black transition-all duration-[350ms] ease-out group-hover:w-full"></div>
				<span className="relative text-black group-hover:text-white">
					Login / Register
				</span>
			</button>
		</>
	)
}
