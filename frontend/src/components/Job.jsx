export default function Job({
	companyName,
	jobTitle,
	stage,
	dateApplied,
	jobDescription,
}) {
	return (
		<div>
			<p>{companyName}</p>
			<p>{jobTitle}</p>
			<p>{stage}</p>
			<p>{dateApplied}</p>
			<p>{jobDescription}</p>
		</div>
	)
}
