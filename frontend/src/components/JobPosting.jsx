export default function jobPosting({
    jobTitle,
    company,
    location,
    jobDescription,
    requirements,
    responsibilities,
    applicationInstructions,
    postedDate,
    applicationDeadline,
}) {
    return (
        <div>
            <p>{jobTitle}</p>
            <p>{company}</p>
            <p>{location}</p>
            <p>{jobDescription}</p>
            <p>{requirements.join("\n")}</p>
            <p>{responsibilities.join("\n")}</p>
            <p>{applicationInstructions}</p>
            <p>{postedDate}</p>
            <p>{applicationDeadline}</p>
        </div>
    )
}