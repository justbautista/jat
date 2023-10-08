import Job from "./Job"

export default function JobList({ jobsApplied }) {
	return (
		<table className="table-auto">
			<thead>
				<tr>
					<th>Company Name</th>
					<th>Job Title</th>
					<th>Stage</th>
					<th>Date Applied</th>
					<th>Job Description</th>
				</tr>
			</thead>
			<tbody>
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
			</tbody>
		</table>
	)
}
