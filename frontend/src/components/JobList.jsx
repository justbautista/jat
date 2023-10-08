import Job from "./Job"

export default function JobList(jobsApplied) {
    
	return (
		<div>
			{jobsApplied["jobsApplied"] ? (
				jobsApplied.map((job) => {
					const jobObject = {
						"companyName": job["companyName"],
						"jobTitle": job["jobTitle"],
						"stage": job["stage"],
						"dateApplied": job["date"],
						"jobDescription": job["jobDescription"],
					}

					{
						<Job jobObject={jobObject} />
					}
				})
			) : (
				<p>No Jobs...</p>
			)}
		</div>
	)
}
