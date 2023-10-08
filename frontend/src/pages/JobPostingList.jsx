import { useEffect, useState } from "react"
import api from "../helpers/axiosConfig"
import JobPosting from "../components/JobPosting"
import NavBar from "../components/NavBar"
import { useAuth0 } from "@auth0/auth0-react"

export default function JobPostingList() {
	const [allJobPostings, setAllJobPostings] = useState([])
	const { user } = useAuth0()
	const [userData, setUserData] = useState()
	const [company, setCompany] = useState("")
	const [location, setLocation] = useState("")
	const [jobTitle, setJobTitle] = useState("")
	useEffect(() => {
		const getJobs = async () => {
			try {
				const response = await api.get("/api/jobs/list_synthetic_jobs")
				setAllJobPostings(response.data)
				const userResponse = await api.post("/api/users/", {
					email: user.email,
				})
				setUserData(userResponse.data)
			} catch (err) {
				console.error(err)
			}
		}

		getJobs()
	}, [])
const remove = (id) => {
	setAllJobPostings(allJobPostings.filter((job)=>{
		return job['job_id'] != id
	}))
}

const filter =  async () => {
	const response = await api.get("/api/jobs/search_synthetic_job?"+`company=${company}&location=${location}&title=${jobTitle}`)
	setAllJobPostings(response.data)
}
	return (
		<>
			<NavBar />
			<div className="flex flex-row">
				<div className="w-full bg-gray-200 p-4">
					<input type="text" className="w-full py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Job Title" onChange={(e)=>setJobTitle(e.target.value)}></input>
				</div>
				<div className="w-full bg-gray-200 p-4">
					<input type="text" className="w-full py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Company" onChange={(e)=>setCompany(e.target.value)}></input>
				</div>
				<div className="w-full bg-gray-200 p-4">
					<input type="text" className="w-full py-2 px-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500" placeholder="Location" onChange={(e)=>setLocation(e.target.value)}></input>
				</div>

				<div className="bg-gray-200 p-4">
				<div className="flex">
				<button className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={()=>filter()}>Filter</button>
				</div>
				</div>
				
			</div>
			{userData && allJobPostings.length > 0 ? (
				allJobPostings.map((jobPosting) => {
					if(userData.jobsApplied.includes(""+jobPosting["job_id"])){
						return
					}else{
						return(
					
					<JobPosting
						user_id={userData._id}
						key={jobPosting["job_id"]}
						job_id={jobPosting["job_id"]}
						jobTitle={jobPosting["job_title"]}
						location={jobPosting["location"]}
						jobDescription={jobPosting["job_description"]}
						requirements={jobPosting["requirements"]}
						responsibilities={jobPosting["responsibilities"]}
						applicationInstruction={
							jobPosting["application_instruction"]
						}
						callback = {()=>remove(jobPosting["job_id"])}
						postedDate={jobPosting["posted_date"]}
						applicationDeadline={jobPosting["application_deadline"]}
					/>
						)
					}
						
				})
			) : (
				<p>No jobs...</p>
			)}
		</>
	)
}
