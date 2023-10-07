import { useAuth0 } from "@auth0/auth0-react"

export default function LoginButton() {
    const { logout } = useAuth0()

    return (
        <>
            <button onClick={() => logout()}>Logout</button>
        </>
    )
}