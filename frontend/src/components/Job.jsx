import { useState } from "react";
import api from "../helpers/axiosConfig";
import formatReadableDate from "../helpers/timeFormater";
export default function Job({
  _id,
  companyName,
  jobTitle,
  stage,
  dateApplied,
  jobDescription,
  setJobsApplied
  //   updateJobStatus,
}) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
  // const [userData, setUserData] = useState();
  const [currStage, setCurrStage] = useState(stage);
  const toggleDropdown = () => {
    setDropdownStatus(!dropdownStatus);
  };
  const updateJobStatus = async (state) => {
    try {
      console.log(_id);
      const response = await api.put("/api/users/jobs", {
        _id: _id,
        stage: state,
      });

      // setUserData(response.data);
      setCurrStage(state);
      setJobsApplied(response.data);
      // console.log(userData);
    } catch (err) {
      console.error(err);
    }
  };

  const dropdownOptions = ["applied", "interviewing", "accepted", "rejected"];

  return (
    <div>
      <p>Company: {companyName}</p>
      <p>Job Title: {jobTitle}</p>
      <p>Current Stage: {currStage}</p>
      <p>Date of Application: {formatReadableDate(dateApplied)}</p>
      <p>Job Description: {jobDescription}</p>
      <div className="relative inline-block text-center">
        <button
          id="dropdownDefaultButton"
          onClick={() => toggleDropdown()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button">
          Change Stage
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {dropdownStatus && (
          <div
            id="dropdown"
            className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownDefaultButton">
              {dropdownOptions.map((option) => (
                <li key={option}>
                  <button
                    className={`block px-4 py-2 ${
                      currStage === option
                        ? "cursor-not-allowed text-gray-400 text-center flex"
                        : "hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    }`}
                    onClick={() =>
                      currStage !== option && updateJobStatus(option)
                    }
                    disabled={currStage === option}>
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
