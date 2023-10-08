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
<<<<<<< HEAD
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
=======
	const [userData, setUserData] = useState()

	const updateJobStatus = async (state) => {
		try {
			const response = await api.put("/api/users/jobs", {
				_id: userData._id,
				stage: state,
			})
			setUserExist(true)
			setUserData(response.data)
		} catch (err) {
			console.error(err)
		}
	}

	useEffect(() => {
		const checkUser = async () => {
			try {
				const response = await api.post("/api/users/", {
					email: user.email,
				})
				setUserExist(true)
				setUserData(response.data)
			} catch (err) {
				//Pull up form
				try {
					const response = await api.post("/api/users/register", {
						name: user.name,
						email: user.email,
						dailyLimit: 5,
					})
					console.log(response.data)
					setUserData(response.data)
					setUserExist(true)
				} catch (err) {
					console.error(err)
				}
				console.error(err)
			}
		}

		checkUser()
	}, [])
>>>>>>> 9e24ca5178fe000df455971c6139de1d1688c046

	useEffect(() => {
		if (!userExist) return

		const getJobsApplied = async () => {
			try {
				const response = await api.post("/api/users/getJobsByUserId", {
					id: userData._id,
				})
				setJobsApplied(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		getJobsApplied()
	}, [userExist])

	return (
		<>
			<NavBar />

			<div className="flex flex-row">
				<SideBar jobsApplied={jobsApplied} />
				<JobList className="jobtable" jobsApplied={jobsApplied} />
				<h1>
					Longest Streak:{" "}
					{userData && userData.longestStreak
						? userData.longestStreak
						: 0}
					, Current Streak:{" "}
					{userData && userData.streaks ? userData.streaks : 0},{" "}
					{userData && userData.todayStreak
						? userData.todayStreak
						: 0}
					/{userData && userData.dailyLimit}
				</h1>
				<SideBar jobsApplied={jobsApplied} />
				<JobList jobsApplied={jobsApplied} />
			</div>
		</>
	)
}
