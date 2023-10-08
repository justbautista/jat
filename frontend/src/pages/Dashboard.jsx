import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../helpers/axiosConfig"
import SideBar from "../components/SideBar"
import { useAuth0 } from "@auth0/auth0-react"
import JobList from "../components/JobList"

export default function Dashboard() {
	const { user } = useAuth0()
	const [jobsApplied, setJobsApplied] = useState([])

	useEffect(() => {
		// const getJobsApplied = async () => {
		// 	try {
		// 		const response = await api.post("/api/users/jobs", {
		// 			email: user.email,
		// 		})
		// 		setJobsApplied(response.data)
		// 	} catch (err) {
		// 		console.error(err)
		// 	}
		// }

		// getJobsApplied()
        const test = {
            "_id": "6521e4d22d486449c646bea6",
            "name": "Nicky Chen",
            "email": "nickychen2022@gmail.com",
            "preferences": [],
            "jobsApplied": [
                {
                    "_id": "6521e4fe2d486449c646bea9",
                    "date": "2023-10-07T00:00:00.000Z",
                    "companyName": "Google",
                    "jobTitle": "Software Engineer Intern",
                    "jobDescription": "Software engineer",
                    "stage": "applied",
                    "userApplied": "6521e4d22d486449c646bea6",
                    "v": 0
                },
                {
                    "_id": "6521e4fe2d486449c646bea9",
                    "date": "2023-10-07T00:00:00.000Z",
                    "companyName": "Google",
                    "jobTitle": "Software Engineer Intern",
                    "jobDescription": "Software engineer",
                    "stage": "applied",
                    "userApplied": "6521e4d22d486449c646bea6",
                    "v": 0
                },
            ],
            "streaks": 1,
            "v": 10
        }
        setJobsApplied(test["jobsApplied"])
	}, [])

	return (
		<div>
			<NavBar />
			<SideBar jobsApplied={jobsApplied} />
			<JobList jobsApplied={jobsApplied} />
		</div>
	)
}
