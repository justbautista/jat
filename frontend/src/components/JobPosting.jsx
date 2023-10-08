import { useState } from "react";

export default function JobPosting({
  jobTitle,
  company,
  location,
  jobDescription,
  requirements,
  responsibilities,
  handleAddJob,
}) {
  return (
    <div className="p-4 border-2 border-gray-400 rounded-lg mb-4 mx-auto text-lg max-w-5xl">
      <div className="flex justify-end">
        <button
          className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-md"
          onClick={handleAddJob}
        >
          Add Job
        </button>
      </div>
      <h3 className="text-lg font-semibold mt-0">{jobTitle}</h3>
      <div className="flex">
        <p className="text-sm mr-2">{company}</p>
        <p className="text-sm">{location}</p>
      </div>
      <p className="text-sm mt-2">{jobDescription}</p>
      <h4 className="text-sm font-semibold mt-4">Requirements</h4>
      <ul className="list-disc ml-4">
        {requirements.map((requirement) => (
          <li className="text-sm" key={requirement}>
            {requirement}
          </li>
        ))}
      </ul>
      <h4 className="text-sm font-semibold mt-4">Responsibilities</h4>
      <ul className="list-disc ml-4">
        {responsibilities.map((responsibility) => (
          <li className="text-sm" key={responsibility}>
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}