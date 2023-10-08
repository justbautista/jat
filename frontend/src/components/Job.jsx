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
  setChangedStage,
}) {
  const [dropdownStatus, setDropdownStatus] = useState(false);
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

      // Update the current stage state
      setCurrStage(state);

      // Call the setChangedStage function to update the parent component
      setChangedStage(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    

      <tr>
        <td className="border px-4 py-2">{companyName}</td>
        <td className="border px-4 py-2">{jobTitle}</td>
        {/* <td className="border px-4 py-2">{currStage}</td> */}
        <td className="border px-4 py-2">{formatReadableDate(dateApplied)}</td>
        <td className="border px-4 py-2">{jobDescription}</td>
        <td className="border px-4 py-2">
          <button
            className="bg-slate-700 hover:bg-slate-300 text-white hover:text-black w-full font-bold py-2 px-4 rounded"
            onClick={() => toggleDropdown()}
          >
            {currStage}
          </button>
          {dropdownStatus && (
            <div className="absolute bg-white border rounded shadow">
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => updateJobStatus("applied")}
              >
                Applied
              </button>
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => updateJobStatus("interviewing")}
              >
                Interview
              </button>
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => updateJobStatus("accepted")}
              >
                Accepted
              </button>
              <button
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                onClick={() => updateJobStatus("Rejected")}
              >
                Rejected
              </button>
            </div>
          )}
        </td>
      </tr>
    
  );
}
