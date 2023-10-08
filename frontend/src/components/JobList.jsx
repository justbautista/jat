import { User } from "@auth0/auth0-react";
import Job from "./Job";

export default function JobList({ jobsApplied, setJobsApplied }) {
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            
          </tr>
        </thead>
        <tbody>
          <div className="bg-black w-[1000px] h-10 rounded-t-md flex justify-center items-center text-white">
            Applied Jobs
          </div>
          <div className="bg-gray-500 w-[1000px] h-fit overflow-y-auto scrollbar-small autofill rounded-b-md mb-24">
          <div className="flex justify-center">
  <table className="border-collapse w-full">
    <thead>
        <th className="px-4 py-2 border">Company</th>
        <th className="px-4 py-2 border">Job Title</th>
        {/* <th className="px-4 py-2 border">Current Stage</th> */}
        <th className="px-4 py-2 border">Date Applied</th>
        <th className="px-4 py-2 border">Job Description</th>
        <th className="px-4 py-2 border">Current state (Click to update)  </th>
    </thead>
    <tbody>
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
</tbody>
</table>
</div>
          </div>
        </tbody>
      </table>
    </>
  );
}
