import About from "./pages/About.jsx"
import { useAuth0 } from "@auth0/auth0-react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import PrivateRoutes from "./components/PrivateRoutes.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import JobPostings from "./pages/JobPostingList.jsx"

function App() {
	const { isAuthenticated } = useAuth0()

	return (
		<>
            <Router>
                <Routes>
                    <Route element={<PrivateRoutes />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/jobpostings" element={<JobPostings />} />
                    </Route>
                    <Route path="/login" element={ isAuthenticated ? <Navigate to="/dashboard" /> : <About />}/>
                    <Route path="/" element={<About />}/>
                </Routes>
            </Router>
		</>
	)
}

export default App
