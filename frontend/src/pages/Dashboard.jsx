import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../helpers/axiosConfig"
import SideBar from "../components/SideBar"
import { useAuth0 } from "@auth0/auth0-react"
import JobList from "../components/JobList"

export default function Dashboard() {
	const { user } = useAuth0()
	const [jobsApplied, setJobsApplied] = useState([])
	const [userExist, setUserExist] = useState(false)
    const [userData, setUserData] = useState()

	useEffect(() => {
		const checkUser = async () => {
            try {
                const response = await api.post("/api/users/", {
                    email: user.email,
                })
                setUserExist(true)
                setUserData(response.data)
            } catch (err) {
                // pull up form
                console.error(err)
            }
		}

        checkUser()
	}, [])

	useEffect(() => {
        if (!userExist) return

		const getJobsApplied = async () => {
			try {
				const response = await api.post("/api/users/getJobsByUserId", {
					id: userData._id 
				})
				setJobsApplied(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		getJobsApplied()
	}, [userExist])

	return (
		<div>
			<NavBar />
			<SideBar jobsApplied={jobsApplied} />
			<JobList jobsApplied={jobsApplied} />
		</div>
	)	
}