import { useAuth0 } from "@auth0/auth0-react"

export default function LogoutButton() {
    const { logout } = useAuth0()

    return (
        <>
            <button onClick={() => logout({ logoutParams: { returnTo: import.meta.env.VITE_REDIRECT_URI } })}>Logout</button>
        </>
    )
}