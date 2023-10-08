import { User } from "@auth0/auth0-react";
import Job from "./Job";

export default function JobList({ jobsApplied, setJobsApplied }) {
  return (
    <>
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
          <div className="bg-slate-600 w-[400px] h-10 rounded-t-md flex justify-center items-center">
            Job Postings
          </div>
          <div className="bg-slate-400 w-[400px] h-80 overflow-y-auto scrollbar-small autofill rounded-b-md">
            {jobsApplied.length > 0 ? (
              jobsApplied.map((job) => (
                <Job
                  key={job["_id"]}
                  _id={job["_id"]}
                  companyName={job["companyName"]}
                  jobTitle={job["jobTitle"]}
                  stage={job["stage"]}
                  dateApplied={job["dateApplied"]}
                  jobDescription={job["jobDescription"]}
                  setJobsApplied={setJobsApplied}
                  // setJobsApplied={setJobsApplied}
                />
              ))
            ) : (
              <p>No Jobs...</p>
            )}
          </div>
        </tbody>
      </table>
    </>
  );
}
