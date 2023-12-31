import NavBar from "../components/NavBar"
import { useState, useEffect } from "react"
import api from "../helpers/axiosConfig"
import SideBar from "../components/SideBar"
import { useAuth0 } from "@auth0/auth0-react"
import JobList from "../components/JobList"
import { Chart } from "react-google-charts";

export default function Dashboard() {
	const { user } = useAuth0()
	const [jobsApplied, setJobsApplied] = useState([])
	const [userExist, setUserExist] = useState(false)
	const [userData, setUserData] = useState()
	const [dailyLimit, setDailyLimit] = useState(5)
	const [timeline, setTimeline] = useState()
	const setDailyLimits = async (limit) => {
		setDailyLimit(limit)
		api.put("/api/users/", {
			email: user.email, preferences: userData.preferences, school: userData.school, dailyLimit: limit
		})
	}
	const updateJobStatus = async (state) => {
		try {
			const response = await api.put("/api/users/jobs", {
				_id: userData._id,
				stage: state,
			})
			setUserExist(true)
			setUserData(response.data)
			console.log(response.data.dailyLimit)
			setDailyLimit(parseInt(response.data.dailyLimit))
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
				setDailyLimit(parseInt(response.data.dailyLimit))
				// localStorage.setItem("user", user)
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

		checkUser();
	}, []);

	useEffect(() => {
		if (!userExist) return;

		const getJobsApplied = async () => {
			try {
				const response = await api.post("/api/users/getJobsByUserId", {
					id: userData._id,
				})
				setJobsApplied(response.data)
				try {
					const calres = await api.post("/api/users/timeline", {
						id: userData._id,
					})
					var ttt = calres.data.cal
					for (let i = 1; i < ttt.length; i++) {
						ttt[i][0] = new Date(ttt[i][0])
					}
					console.log(ttt)
					setTimeline(ttt)
				} catch (e) {
					console.error(e)
				}
			} catch (err) {
				console.error(err)
			}
		}

		getJobsApplied();
	}, [userExist]);

	return (
		<>
			<NavBar />

			<div className="flex flex-row mb-16 ml-4 align-middle">
				<span>I will complete </span><input type="number" value={dailyLimit} className="py-1 px-1 w-16 h-8 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Goal" onChange={(e) => setDailyLimits(e.target.value)}></input><span> Job Applications Per Day</span>
			</div>
			<div className="flex flex-row mb-16">
				<div style={{ width: "100%", textAlign: "center" }}>
					<h1>Longest Streak: {userData && userData.longestStreak ? userData.longestStreak : 0}</h1>
				</div>
				<div style={{ width: "100%", textAlign: "center" }}>
					<h1> Current Streak: {userData && userData.streaks ? userData.streaks : 0}</h1>
				</div>
				<div style={{ width: "100%", textAlign: "center" }}>
					<h1> {userData && userData.todayStreak ? userData.todayStreak : 0}/{userData && userData.dailyLimit}</h1>
				</div>
			</div>
			{/* this is the streak counter */}



			<div className="flex flex-row justify-center items-center">
				<div className="flex flex-row justify-center w-full">
					{/* <Chart
						chartType="Calendar"
						width="fit-content"
						height="400px"
						data={timeline}
						options={{ title: "Your Job Application Calendar" }}
					/> */}
					<JobList className="jobtable" jobsApplied={jobsApplied} />
				</div>
			</div>
		</>
	)
}
