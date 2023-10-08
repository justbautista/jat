import { useEffect, useState } from "react"
import api from "../helpers/axiosConfig"
import JobPosting from "../components/JobPosting"
import NavBar from "../components/NavBar"

export default function JobPostingList() {
	const [allJobPostings, setAllJobPostings] = useState([])

	useEffect(() => {
		// const getJobs = async () => {
		//     try {
		//         const response = await api.get("/api/jobs/list_synthetic_jobs")
		//         setAllJobPostings(response.data)
		//     } catch (err) {
		//         console.error(err)
		//     }
		// }

		// getJobs()

		const test = [
			{
				"job_id": 1,
				"job_title": "Software Engineer",
				"company": "TechCo Inc.",
				"location": "San Francisco, CA",
				"job_description":
					"TechCo Inc. is seeking a talented Software Engineer to join our dynamic team...",
				"requirements": [
					"Bachelor's degree in Computer Science or related field",
					"3+ years of experience in software development",
					"Proficiency in Java, Python, or C++",
					"Strong problem-solving skills",
					"Excellent communication skills",
				],
				"responsibilities": [
					"Design and implement software solutions",
					"Collaborate with cross-functional teams",
					"Troubleshoot and debug software issues",
					"Participate in code reviews",
					"Stay updated with the latest industry trends",
				],
				"application_instructions":
					"To apply, please send your resume and cover letter to hr@techco.com",
				"posted_date": "2023-10-07",
				"application_deadline": "2023-10-21",
			},
            {
				"job_id": 1,
				"job_title": "Software Engineer",
				"company": "TechCo Inc.",
				"location": "San Francisco, CA",
				"job_description":
					"TechCo Inc. is seeking a talented Software Engineer to join our dynamic team...",
				"requirements": [
					"Bachelor's degree in Computer Science or related field",
					"3+ years of experience in software development",
					"Proficiency in Java, Python, or C++",
					"Strong problem-solving skills",
					"Excellent communication skills",
				],
				"responsibilities": [
					"Design and implement software solutions",
					"Collaborate with cross-functional teams",
					"Troubleshoot and debug software issues",
					"Participate in code reviews",
					"Stay updated with the latest industry trends",
				],
				"application_instructions":
					"To apply, please send your resume and cover letter to hr@techco.com",
				"posted_date": "2023-10-07",
				"application_deadline": "2023-10-21",
			},
		]

		setAllJobPostings(test)
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
