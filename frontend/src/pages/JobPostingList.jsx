import { useEffect, useState } from "react"
import api from "../helpers/axiosConfig"
import JobPosting from "../components/JobPosting"
import NavBar from "../components/NavBar"

export default function JobPostingList() {
	const [allJobPostings, setAllJobPostings] = useState([])

	useEffect(() => {
		const getJobs = async () => {
			try {
				const response = await api.get("/api/jobs/list_synthetic_jobs")
				setAllJobPostings(response.data)
			} catch (err) {
				console.error(err)
			}
		}

		getJobs()
	}, [])

	return (
		<>
			<NavBar />
			{allJobPostings.length > 0 ? (
				allJobPostings.map((jobPosting) => (
					<JobPosting
						key={jobPosting["job_id"]}
						jobTitle={jobPosting["job_title"]}
						location={jobPosting["location"]}
						jobDescription={jobPosting["job_description"]}
						requirements={jobPosting["requirements"]}
						responsibilities={jobPosting["responsibilities"]}
						applicationInstruction={
							jobPosting["application_instruction"]
						}
						postedDate={jobPosting["posted_date"]}
						applicationDeadline={jobPosting["application_deadline"]}
					/>
				))
			) : (
				<p>No jobs...</p>
			)}
		</>
	)
}
