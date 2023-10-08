import { useAuth0 } from "@auth0/auth0-react"

export default function LogoutButton() {
    const { logout } = useAuth0()

    return (
        <>
            <button className="bg-black hover:bg-slate-400 text-white hover:text-black py-2 px-4 rounded" onClick={() => logout({ logoutParams: { returnTo: import.meta.env.VITE_REDIRECT_URI } })}>Logout</button>
            
        </>
    )
}