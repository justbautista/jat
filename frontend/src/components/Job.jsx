export default function Job(jobObject) {
    return (
        <div>
            <p>{jobObject["companyName"]}</p>
            <p>{jobObject["jobTitle"]}</p>
            <p>{jobObject["stage"]}</p>
            <p>{jobObject["dateApplied"]}</p>
            <p>{jobObject["jobDescription"]}</p>
        </div>
    )
}