<<<<<<< HEAD
import Home from "./pages/Home.jsx"
import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import PrivateRoutes from "./components/PrivateRoutes.jsx"
import Dashboard from "./pages/Dashboard.jsx"
=======

import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";
>>>>>>> refs/remotes/origin/frontend

function App() {
	const { isAuthenticated } = useAuth0()

	return (
		<>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/" element={<Dashboard />}></Route>
                    </Route>
                    <Route path="/login" element={ isAuthenticated ? <Navigate to="/" /> : <Home />}/>
                </Routes>
            </Router>
		</>
	)
}

export default App
