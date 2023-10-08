export default function Job({
	companyName,
	jobTitle,
	stage,
	dateApplied,
	jobDescription,
}) {
	return (
        <tr>
			<td>{companyName}</td>
			<td>{jobTitle}</td>
			<td>{stage}</td>
			<td>{dateApplied}</td>
			<td>{jobDescription}</td>
        </tr>
	)
}
