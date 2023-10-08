import Job from "./Job"

export default function JobList({ jobsApplied }) {
	return (
		<div>
			{jobsApplied.length > 0 ? (
				jobsApplied.map((job) => (
					<Job
						key={job["_id"]}
						companyName={job["companyName"]}
						jobTitle={job["jobTitle"]}
						stage={job["stage"]}
						dateApplied={job["dateApplied"]}
						jobDescription={job["jobDescription"]}
					/>
				))
			) : (
				<p>No Jobs...</p>
			)}
		</div>
	)
}
