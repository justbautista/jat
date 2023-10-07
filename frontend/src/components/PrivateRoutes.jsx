import { Outlet, Navigate } from "react-router-dom"
import { useAuth0 } from "@auth0/auth0-react"

export default function PrivateRoutes() {
	const { isAuthenticated } = useAuth0()

	return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}